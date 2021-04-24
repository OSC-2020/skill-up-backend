import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllBooksFromFirestore,
  saveBooksGroup,
} from "../../../Firebase/bookGroups/crud";
import { IBookGroups, setLoadedOnce, setSavingState } from "./bookGroups.slice";

//#region Thunks
const fetchAllBookGroups = createAsyncThunk(
  "bookGroups/fetchAll",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoadedOnce(true));
    const booksDocs = await getAllBooksFromFirestore();
    const books: any = [];
    booksDocs.docs.forEach((doc) => {
      books.push(doc.data());
    });
    return books;
  }
);

const saveNewBookGroup = createAsyncThunk(
  "bookGroups/create",
  async (group: IBookGroups, thunkApi) => {
    thunkApi.dispatch(setSavingState("start"));
    try {
      await saveBooksGroup(group);
      thunkApi.dispatch(setSavingState("done"));
    } catch (error) {
      thunkApi.dispatch(setSavingState("failed"));
    }
  }
);
//#endregion Thunks

export { fetchAllBookGroups, saveNewBookGroup };
