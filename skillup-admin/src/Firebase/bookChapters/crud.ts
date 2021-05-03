import { firebaseInstance } from '..';
import { IBookChapters } from '../../redux/slices/bookChapters';
import {
  IChapterDetail,
  IChapterInfo,
} from '../../redux/slices/chapterDetail/chapterDetail';
import RootCollections, { BookChaptersCollections } from '../CollectionNames';

const booksRef = firebaseInstance.firestore.collection(
  `/${RootCollections.BOOKS}`,
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

    chaptersArrInDB.push(chapterInfo);
    txn.update(bookRef, { chapters: chaptersArrInDB });
  });
};

//#endregion Create

export { getBookDetail_DB, createNewChapter_DB };
