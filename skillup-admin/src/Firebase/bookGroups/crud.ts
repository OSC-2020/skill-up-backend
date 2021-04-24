import { firebaseInstance } from "..";
import { IBookGroups } from "../../redux/slices/bookGroups/bookGroups.slice";
import RootCollections from "../CollectionNames";

const bookGroupsRef = firebaseInstance.firestore.collection(
  `/${RootCollections.BOOK_GROUPS}`
);
const booksRef = firebaseInstance.firestore.collection(
  `/${RootCollections.BOOKS}`
);

//#region Create
const saveBooksGroup = async (group: IBookGroups) => {
  group.uiType = 100;
  return firebaseInstance.firestore.runTransaction(async (txn) => {
    group.books.forEach((book) => {
      const doc = booksRef.doc();
      book.id = doc.id;
      book.uiType = 100;

      txn.set(doc, book);
    });

    const groupDoc = bookGroupsRef.doc();
    txn.set(groupDoc, group);
  });
};
//#region Create

//#region Read
const getAllBooksFromFirestore = async () => {
  return await bookGroupsRef.get();
};

//#region Read

//#region Update
//#region Update

//#region Delete

const deleteBookGroupInFirestore = async (groupId: string) => {
  return firebaseInstance.firestore.runTransaction(async (txn) => {
    const groupRefToDelete = bookGroupsRef.doc(groupId);
    const groupData: IBookGroups = (
      await txn.get(groupRefToDelete)
    ).data() as IBookGroups;
    groupData.books.forEach((book) => {
      const refToDelete = booksRef.doc(book.id);
      txn.delete(refToDelete);
    });
    txn.delete(groupRefToDelete);
  });
};
//#region Delete

export { getAllBooksFromFirestore, saveBooksGroup, deleteBookGroupInFirestore };
