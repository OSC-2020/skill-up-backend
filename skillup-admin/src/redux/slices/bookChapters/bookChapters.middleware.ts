import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewChapter_DB,
  getBookDetail_DB,
} from '../../../Firebase/bookChapters/crud';
import { IChapterInfo } from '../chapterDetail/chapterDetail';
import {
  IBookChapters,
  setLoadedOnce,
  setSavingState,
} from './bookChapters.slice';

//#region Thunks
const fetchBookDetail = createAsyncThunk(
  'bookChapters/fetchBookDetail',
  async (bookId: string, thunkAPI): Promise<IBookChapters> => {
    thunkAPI.dispatch(setLoadedOnce(true));
    return (await getBookDetail_DB(bookId)) as IBookChapters;
  },
);

const createNewChapter = createAsyncThunk(
  'bookChapters/createChapter',
  async (data: { bookId: string; chapterInfo: IChapterInfo }, thunkApi) => {
    thunkApi.dispatch(setSavingState('start'));
    try {
      await createNewChapter_DB(data.bookId, data.chapterInfo);
      thunkApi.dispatch(setSavingState('done'));
    } catch (error) {
      thunkApi.dispatch(setSavingState('failed'));
    }
  },
);
//#endregion Thunks

export { fetchBookDetail, createNewChapter };
