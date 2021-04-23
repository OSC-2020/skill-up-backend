import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBooksFromFirestore } from "../../../Firebase/bookGroups/crud";
import { setLoadedOnce } from "./bookGroups.slice";

//#region Thunks
const fetchAllBookGroups = createAsyncThunk(
  "bookGroups/fetchAll",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoadedOnce(true));
    try {
      const booksDocs = await getAllBooksFromFirestore();
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
