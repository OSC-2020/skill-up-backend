import { createAsyncThunk } from "@reduxjs/toolkit";
import { firebaseInstance } from "../../../Firebase";
import { setLoadedOnce } from "./bookGroups.slice";

//#region Thunks
const fetchAllBookGroups = createAsyncThunk(
  "bookGroups/fetchAll",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoadedOnce(true));
    const bookRef = firebaseInstance.firestore.collection("/book_groups");
    try {
      const booksDocs = await bookRef.get();
      const books: any = [];
      booksDocs.docs.forEach((doc) => {
        books.push(doc.data());
      });
      return books;
    } catch (e) {}
  }
);

//#endregion Thunks

export { fetchAllBookGroups };
