import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBookDetail_DB } from '../../../Firebase/bookChapters/crud';
import { setLoadedOnce } from './bookChapters.slice';

//#region Thunks
const fetchBookDetail = createAsyncThunk(
  'bookChapters/fetchBookDetail',
  async (bookId: string, thunkAPI): Promise<any> => {
    thunkAPI.dispatch(setLoadedOnce(true));
    return await getBookDetail_DB(bookId);
  },
);

//#endregion Thunks

export { fetchBookDetail };
