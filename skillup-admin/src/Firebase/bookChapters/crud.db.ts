import firebase from 'firebase/app';
import { firebaseInstance } from '..';
import { IBookChapters } from '../../redux/slices/bookChapters';
import { IBookGroups, IBooks } from '../../redux/slices/bookGroups';
import {
  IChapterDetail,
  IChapterInfo,
} from '../../redux/slices/chapterDetail/chapterDetail';
import RootCollections, { BookChaptersCollections } from '../CollectionNames.db';

const booksRef = firebaseInstance.firestore.collection(
  `/${RootCollections.BOOKS}`,
);
const bookGroupsRef = firebaseInstance.firestore.collection(
  `/${RootCollections.BOOK_GROUPS}`,
);

//#region Read
const getBookDetail_DB = async (bookId: string) => {
  return await (await booksRef.doc(bookId).get()).data();
};
//#endregion Read

//#region Create
const createNewChapter_DB = async (
  bookId: string,
  chapterInfo: IChapterInfo,
) => {
  // 2. add it to chapters array
  //
  return firebaseInstance.firestore.runTransaction(async (txn) => {
    // 1. create a chapter doc
    // 2. Get chapters array
    // 4. Add an entry to chapters array in book doc
    const bookRef = booksRef.doc(bookId);
    const newChapterRef = bookRef
      .collection(BookChaptersCollections.CHAPTERS)
      .doc();
    const { chapters: chaptersArrInDB } = (
      await txn.get(bookRef)
    ).data() as IBookChapters;
    const chapterData: IChapterDetail = {
      ...chapterInfo,
      id: newChapterRef.id,
    };
    txn.set(newChapterRef, chapterData);

    chaptersArrInDB.push(chapterData);
    txn.update(bookRef, {
      chapters: chaptersArrInDB,
      totalChapters: firebase.firestore.FieldValue.increment(1),
    });
  });
};

//#endregion Create

//#region Delete
const deleteChapter_DB = async (bookId: string, chapterId: string) => {
  return firebaseInstance.firestore.runTransaction(async (txn) => {
    const bookRef = booksRef.doc(bookId);
    let { chapters: chaptersArrInDB } = (
      await txn.get(bookRef)
    ).data() as IBookChapters;

    const chapterRef = booksRef
      .doc(bookId)
      .collection(BookChaptersCollections.CHAPTERS)
      .doc(chapterId);
    txn.delete(chapterRef);
    chaptersArrInDB = chaptersArrInDB.filter(
      (chapter) => chapter.id !== chapterId,
    );
    txn.update(bookRef, {
      chapters: chaptersArrInDB,
      totalChapters: firebase.firestore.FieldValue.increment(-1),
    });
  });
};
//#endregion Delete

//#region Update
const updateChapterTitle_DB = async (
  bookId: string,
  chapterId: string,
  newTitle: string,
) => {
  const bookDoc = booksRef.doc(bookId);
  const chapterDoc = bookDoc
    .collection(BookChaptersCollections.CHAPTERS)
    .doc(chapterId);
  return firebaseInstance.firestore.runTransaction(async (txn) => {
    let { chapters: chaptersArrInDB } = (
      await txn.get(bookDoc)
    ).data() as IBookChapters;

    txn.update(chapterDoc, { title: newTitle });
    const chapterInfo = chaptersArrInDB.find(
      (chapter) => chapter.id === chapterId,
    );
    if (chapterInfo) {
      chapterInfo.title = newTitle;
      txn.update(bookDoc, { chapters: chaptersArrInDB });
    }
  });
};

const updateBookTitle_DB = async (bookId: string, newTitle: string) => {
  return firebaseInstance.firestore.runTransaction(async (txn) => {
    const bookDoc = booksRef.doc(bookId);
    let { parentGroupIds } = (await txn.get(bookDoc)).data() as IBookChapters;

    const groupsToBeUpdated = new Map<string, IBooks[]>();
    for (const groupId of parentGroupIds as string[]) {
      const bookGroup = bookGroupsRef.doc(groupId);
      const { books } = (await txn.get(bookGroup)).data() as IBookGroups;
      groupsToBeUpdated.set(groupId, books);
    }

    txn.update(bookDoc, { title: newTitle });
    for (const [groupId, books] of groupsToBeUpdated.entries()) {
      const book = books.find((book) => book.id === bookId) as IBooks;
      book.title = newTitle;
      txn.update(bookGroupsRef.doc(groupId), { books });
    }
  });
};

const updateChapterOrder_DB = async (
  bookId: string,
  chapters: IChapterInfo[],
) => {
  return await booksRef.doc(bookId).update({ chapters });
};
//#endregion Update

export {
  getBookDetail_DB,
  createNewChapter_DB,
  deleteChapter_DB,
  updateChapterTitle_DB,
  updateChapterOrder_DB,
  updateBookTitle_DB,
};
