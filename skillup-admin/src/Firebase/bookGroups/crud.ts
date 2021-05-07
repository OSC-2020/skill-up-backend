import { firebaseInstance } from '..';
import { IBookGroups } from '../../redux/slices/bookGroups';
import RootCollections from '../CollectionNames';
import DBError from '../../errors/DBError';

const bookGroupsRef = firebaseInstance.firestore.collection(
  `/${RootCollections.BOOK_GROUPS}`,
);
const booksRef = firebaseInstance.firestore.collection(
  `/${RootCollections.BOOKS}`,
);

//#region Create
const saveBooksGroup_DB = async (group: IBookGroups) => {
  group.uiType = group.uiType || 100;
  return firebaseInstance.firestore.runTransaction(async (txn) => {
    group.books.forEach((book) => {
      const doc = booksRef.doc();
      book.id = doc.id;
      book.uiType = book.uiType || 100;

      txn.set(doc, book);
    });

    const groupDoc = bookGroupsRef.doc();
    txn.set(groupDoc, group);
  });
};
//#region Create

//#region Read
const getAllBooks_DB = async () => {
  return await bookGroupsRef.get();
};

const getBookGroupWithId_DB = async (id: string): Promise<IBookGroups> => {
  const bookGroup = await bookGroupsRef.doc(id).get();
  if (bookGroup.exists) {
    return bookGroup.data() as IBookGroups;
  }
  throw DBError.notFoundError(`Group ID: [${id}] not found`);
};

//#region Read

//#region Update
const modifyBooksGroup_DB = async (group: IBookGroups) => {
  return firebaseInstance.firestore.runTransaction(async (txn) => {
    const groupDoc = bookGroupsRef.doc();
    group.books.forEach((book) => {
      const doc = booksRef.doc(book.id);
      txn.update(doc, book);
    });

    txn.update(groupDoc, group);
  });
};

const publishBookGroup_DB = async (groupId: string, publish = false) => {
  const doc = bookGroupsRef.doc(groupId);
  await doc.update({ isPublished: publish });
};
//#region Update

//#region Delete

const deleteBookGroup_DB = async (groupId: string) => {
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

export {
  getAllBooks_DB,
  getBookGroupWithId_DB,
  saveBooksGroup_DB,
  modifyBooksGroup_DB,
  deleteBookGroup_DB,
  publishBookGroup_DB,
};
