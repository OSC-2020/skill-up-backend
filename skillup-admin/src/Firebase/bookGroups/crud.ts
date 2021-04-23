import { firebaseInstance } from "..";

//#region Create
//#region Create

//#region Read
const getAllBooksFromFirestore = async () => {
  const bookRef = firebaseInstance.firestore.collection("/book_groups");
  return await bookRef.get();
};

export { getAllBooksFromFirestore };
//#region Read

//#region Update
//#region Update

//#region Delete
//#region Delete
