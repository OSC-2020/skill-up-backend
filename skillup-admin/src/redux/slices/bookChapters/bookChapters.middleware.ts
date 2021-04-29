import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBooks_DB } from "../../../Firebase/bookGroups/crud";
import { IBookChapters, setLoadedOnce } from "./bookChapters.slice";

//#region Thunks
const fetchBookDetail = createAsyncThunk(
  "bookChapters/fetchBookData",
  async (bookId, thunkAPI) => {
    thunkAPI.dispatch(setLoadedOnce(true));
    const booksDocs = await getAllBooks_DB();
    const books: any = [];
    booksDocs.docs.forEach((doc) => {
      const group = doc.data() as IBookChapters;
      group.id = doc.id;
      books.push(group);
    });
    return books;
  }
);

//#endregion Thunks

export { fetchBookDetail };
