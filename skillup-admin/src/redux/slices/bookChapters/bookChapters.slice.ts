import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IChapterInfo } from '../chapterDetail/chapterDetail';
import {
  createNewChapter_MW,
  deleteChapter_MW,
  fetchBookDetail_MW,
  updateChapterTitle_MW,
} from './bookChapters.middleware';

interface IBookChapters {
  id: string;
  title: string;
  totalChapters: number;
  completedByCount: number;
  chapters: IChapterInfo[];
}

//#region Declarations

interface IBookChaptersState {
  loading: 'idle' | 'pending';
  bookInfo: IBookChapters | null;
  loadedOnce: boolean;
  savingState: '' | 'start' | 'done' | 'failed';
  deletingState: '' | 'start' | 'done' | 'failed';
}

const initialState: IBookChaptersState = {
  loading: 'idle',
  loadedOnce: false,
  bookInfo: null,
  savingState: '',
  deletingState: '',
};
//#endregion Declarations

//#region Reducer
export const bookChaptersSlice = createSlice({
  name: 'currentBookDetail',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoadedOnce(state, action: PayloadAction<boolean>) {
      state.loadedOnce = action.payload;
    },
    setSavingState(
      state,
      action: PayloadAction<'' | 'start' | 'done' | 'failed'>,
    ) {
      state.savingState = action.payload;
    },
    setDeletingState(
      state,
      action: PayloadAction<'' | 'start' | 'done' | 'failed'>,
    ) {
      state.deletingState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchBookDetail_MW.fulfilled,
      (state, action: PayloadAction<IBookChapters>) => {
        state.bookInfo = action.payload;
      },
    );
    builder.addCase(createNewChapter_MW.fulfilled, (state, action) => {
      state.savingState = 'done';
    });
    builder.addCase(deleteChapter_MW.fulfilled, (state, action) => {
      state.deletingState = 'done';
    });
    builder.addCase(updateChapterTitle_MW.fulfilled, (state, action) => {
      state.savingState = 'done';
    });
  },
});
//#endregion Reducer

//#region Selectors

const selectSavingState = (state: RootState) =>
  state.currentBookDetail.savingState;
const selectDeletingState = (state: RootState) =>
  state.currentBookDetail.deletingState;

//#endregion Selectors

//#region exports
export const {
  setLoadedOnce,
  setSavingState,
  setDeletingState,
} = bookChaptersSlice.actions;

export type { IBookChapters, IBookChaptersState };
export { selectSavingState, selectDeletingState };
export default bookChaptersSlice.reducer;
//#endregion exports
