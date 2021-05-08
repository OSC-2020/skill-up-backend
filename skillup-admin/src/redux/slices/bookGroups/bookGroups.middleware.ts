import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteBookGroup_DB,
  getAllBooks_DB,
  modifyBooksGroup_DB,
  publishBookGroup_DB,
  saveBooksGroup_DB,
} from '../../../Firebase/bookGroups/crud.db';
import {
  IBookGroups,
  bgSetDeletingState_AN,
  bgSetSavingState_AN,
} from './bookGroups.slice';

//#region Thunks
const fetchAllBookGroups_MW = createAsyncThunk(
  'bookGroups/fetchAll',
  async (_, thunkAPI) => {
    const booksDocs = await getAllBooks_DB();
    const books: any = [];
    booksDocs.docs.forEach((doc) => {
      const group = doc.data() as IBookGroups;
      group.id = doc.id;
      books.push(group);
    });
    return books;
  },
);

const saveNewBookGroup_MW = createAsyncThunk(
  'bookGroups/create',
  async (group: IBookGroups, thunkApi) => {
    thunkApi.dispatch(bgSetSavingState_AN('start'));
    try {
      await saveBooksGroup_DB(group);
      thunkApi.dispatch(bgSetSavingState_AN('done'));
      thunkApi.dispatch(fetchAllBookGroups_MW());
    } catch (error) {
      thunkApi.dispatch(bgSetSavingState_AN('failed'));
    }
  },
);
const modifyBookGroup_MW = createAsyncThunk(
  'bookGroups/modify',
  async (group: IBookGroups, thunkApi) => {
    thunkApi.dispatch(bgSetSavingState_AN('start'));
    try {
      await modifyBooksGroup_DB(group);
      thunkApi.dispatch(bgSetSavingState_AN('done'));
      thunkApi.dispatch(fetchAllBookGroups_MW());
    } catch (error) {
      thunkApi.dispatch(bgSetSavingState_AN('failed'));
    }
  },
);

const deleteBookGroup_MW = createAsyncThunk(
  'bookGroups/delete',
  async (groupId: string, thunkApi) => {
    thunkApi.dispatch(bgSetDeletingState_AN('start'));
    try {
      await deleteBookGroup_DB(groupId);
      thunkApi.dispatch(bgSetDeletingState_AN('done'));
      thunkApi.dispatch(fetchAllBookGroups_MW());
    } catch (error) {
      thunkApi.dispatch(bgSetDeletingState_AN('failed'));
    }
  },
);

//#region Publish BookGroup
const changePublishState = async (
  groupId: string,
  publish: boolean,
  thunkApi: any,
) => {
  thunkApi.dispatch(bgSetSavingState_AN('start'));
  try {
    await publishBookGroup_DB(groupId, publish);
    thunkApi.dispatch(bgSetSavingState_AN('done'));
  } catch (error) {
    thunkApi.dispatch(bgSetSavingState_AN('failed'));
  }
  return groupId;
};
const publishBookGroup_MW = createAsyncThunk(
  'bookGroups/publish',
  async (groupId: string, thunkApi) =>
    await changePublishState(groupId, true, thunkApi),
);
const unpublishBookGroup_MW = createAsyncThunk(
  'bookGroups/unpublish',
  async (groupId: string, thunkApi) =>
    await changePublishState(groupId, false, thunkApi),
);
//#endregion Publish BookGroup

//#endregion Thunks

export {
  fetchAllBookGroups_MW,
  saveNewBookGroup_MW,
  modifyBookGroup_MW,
  deleteBookGroup_MW,
  publishBookGroup_MW,
  unpublishBookGroup_MW,
};
