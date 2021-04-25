import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteBookGroup_DB,
  getAllBooks_DB,
  modifyBooksGroup_DB,
  saveBooksGroup_DB,
} from "../../../Firebase/bookGroups/crud";
import {
  IBookGroups,
  setDeletingState,
  setLoadedOnce,
  setSavingState,
} from "./bookGroups.slice";

//#region Thunks
const fetchAllBookGroups = createAsyncThunk(
  "bookGroups/fetchAll",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoadedOnce(true));
    const booksDocs = await getAllBooks_DB();
    const books: any = [];
    booksDocs.docs.forEach((doc) => {
      const group = doc.data() as IBookGroups;
      group.id = doc.id;
      books.push(group);
    });
    return books;
  }
);

const saveNewBookGroup = createAsyncThunk(
  "bookGroups/create",
  async (group: IBookGroups, thunkApi) => {
    thunkApi.dispatch(setSavingState("start"));
    try {
      await saveBooksGroup_DB(group);
      thunkApi.dispatch(setSavingState("done"));
      thunkApi.dispatch(fetchAllBookGroups());
    } catch (error) {
      thunkApi.dispatch(setSavingState("failed"));
    }
  }
);
const modifyBookGroup = createAsyncThunk(
  "bookGroups/modify",
  async (group: IBookGroups, thunkApi) => {
    thunkApi.dispatch(setSavingState("start"));
    try {
      await modifyBooksGroup_DB(group);
      thunkApi.dispatch(setSavingState("done"));
      thunkApi.dispatch(fetchAllBookGroups());
    } catch (error) {
      thunkApi.dispatch(setSavingState("failed"));
    }
  }
);

const deleteBookGroup = createAsyncThunk(
  "bookGroups/delete",
  async (groupId: string, thunkApi) => {
    thunkApi.dispatch(setDeletingState("start"));
    try {
      await deleteBookGroup_DB(groupId);
      thunkApi.dispatch(setDeletingState("done"));
      thunkApi.dispatch(fetchAllBookGroups());
    } catch (error) {
      thunkApi.dispatch(setDeletingState("failed"));
    }
  }
);
//#endregion Thunks

export {
  fetchAllBookGroups,
  saveNewBookGroup,
  modifyBookGroup,
  deleteBookGroup,
};
