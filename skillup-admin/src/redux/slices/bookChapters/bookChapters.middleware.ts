import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewChapter_DB,
  getBookDetail_DB,
} from '../../../Firebase/bookChapters/crud';
import { AppDispatch, RootState } from '../../store';
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

const createNewChapter = createAsyncThunk<
  // Return type of the payload creator
  void,
  // First argument to the payload creator
  IChapterInfo,
  {
    // Optional fields for defining thunkApi field types
    dispatch: AppDispatch;
    state: RootState;
  }
>('bookChapters/createChapter', async (chapterInfo: IChapterInfo, thunkApi) => {
  thunkApi.dispatch(setSavingState('start'));
  const bookId = thunkApi.getState().currentBookDetail.bookInfo?.id as string;
  try {
    await createNewChapter_DB(bookId, chapterInfo);
    thunkApi.dispatch(fetchBookDetail(bookId));
  } catch (error) {
    console.log('🚀 ~ error', error);
    thunkApi.dispatch(setSavingState('failed'));
  }
});
//#endregion Thunks

export { fetchBookDetail, createNewChapter };
