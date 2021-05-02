import { firebaseInstance } from '..';
import RootCollections from '../CollectionNames';

const booksRef = firebaseInstance.firestore.collection(
  `/${RootCollections.BOOKS}`,
);

//#region Read
const getBookDetail_DB = async (bookId: string) => {
  return await (await booksRef.doc(bookId).get()).data();
};
//#endregion Read

export { getBookDetail_DB };
