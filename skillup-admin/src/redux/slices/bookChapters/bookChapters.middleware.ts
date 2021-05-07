import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewChapter_DB,
  deleteChapter_DB,
  getBookDetail_DB,
  updateBookTitle_DB,
  updateChapterOrder_DB,
  updateChapterTitle_DB,
} from '../../../Firebase/bookChapters/crud';
import { AppDispatch, RootState } from '../../store';
import { IChapterInfo } from '../chapterDetail/chapterDetail';
import {
  bcSetDeletingState_AN,
  bcSetSavingState_AN,
  IBookChapters,
} from './bookChapters.slice';

//#region Thunks
const fetchBookDetail_MW = createAsyncThunk<
  IBookChapters,
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('bookChapters/fetchBookDetail', async (bookId: string, thunkApi) => {
  // const bookInfo = thunkApi.getState().cached.bookDetailMap[bookId];

  // TODO: once all of cached is fully operational, after #13 is resolved, use cache above
  return (await getBookDetail_DB(bookId)) as IBookChapters;
});

const createNewChapter_MW = createAsyncThunk<
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
  thunkApi.dispatch(bcSetSavingState_AN('start'));
  const bookId = thunkApi.getState().currentBookDetail.bookInfo?.id as string;
  try {
    await createNewChapter_DB(bookId, chapterInfo);
    thunkApi.dispatch(fetchBookDetail_MW(bookId));
  } catch (error) {
    thunkApi.dispatch(bcSetSavingState_AN('failed'));
  }
});

const deleteChapter_MW = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('bookChapters/deleteChapter', async (chapterId: string, thunkApi) => {
  thunkApi.dispatch(bcSetDeletingState_AN('start'));
  const bookId = thunkApi.getState().currentBookDetail.bookInfo?.id as string;
  try {
    await deleteChapter_DB(bookId, chapterId);
    thunkApi.dispatch(fetchBookDetail_MW(bookId));
  } catch (error) {
    thunkApi.dispatch(bcSetDeletingState_AN('failed'));
  }
});

const updateChapterTitle_MW = createAsyncThunk<
  void,
  { chapterId: string; title: string },
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  'bookChapters/updateTitle',
  async (data: { chapterId: string; title: string }, thunkApi) => {
    thunkApi.dispatch(bcSetSavingState_AN('start'));
    const bookId = thunkApi.getState().currentBookDetail.bookInfo?.id as string;
    try {
      await updateChapterTitle_DB(bookId, data.chapterId, data.title);
      thunkApi.dispatch(fetchBookDetail_MW(bookId));
    } catch (error) {
      thunkApi.dispatch(bcSetSavingState_AN('failed'));
    }
  },
);

const updateChapterOrder_MW = createAsyncThunk<
  void,
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('bookChapters/updateChapterOrder', async (_, thunkApi) => {
  thunkApi.dispatch(bcSetSavingState_AN('start'));
  const bookInfo = thunkApi.getState().currentBookDetail.bookInfo;
  const bookId = bookInfo?.id as string;
  try {
    await updateChapterOrder_DB(bookId, bookInfo?.chapters as IChapterInfo[]);
    thunkApi.dispatch(fetchBookDetail_MW(bookId));
  } catch (error) {
    thunkApi.dispatch(bcSetSavingState_AN('failed'));
  }
});

const updateBookTitle_MW = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('bookChapters/updateBookTitle', async (newTitle: string, thunkApi) => {
  const bookInfo = thunkApi.getState().currentBookDetail.bookInfo;
  const bookId = bookInfo?.id as string;
  thunkApi.dispatch(bcSetSavingState_AN('start'));
  try {
    await updateBookTitle_DB(bookId, newTitle);
    thunkApi.dispatch(fetchBookDetail_MW(bookId));
  } catch (error) {
    thunkApi.dispatch(bcSetSavingState_AN('failed'));
  }
});
//#endregion Thunks

export {
  fetchBookDetail_MW,
  createNewChapter_MW,
  deleteChapter_MW,
  updateChapterTitle_MW,
  updateChapterOrder_MW,
  updateBookTitle_MW,
};
