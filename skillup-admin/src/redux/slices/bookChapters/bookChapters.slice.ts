import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IChapterInfoModel } from '../chapterDetail/chapterDetail';
import { fetchBookDetail } from './bookChapters.middleware';

interface IBookChapters {
  id: string;
  title: string;
  totalChapters: number;
  completedByCount: number;
  chapters: IChapterInfoModel[];
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
      fetchBookDetail.fulfilled,
      (state, action: PayloadAction<IBookChapters>) => {
        state.bookInfo = action.payload;
      },
    );
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

// WARNING: Don't know why or how this works, but we need to re-export in next line to make it work
// you can not import it from middleware, insted it has to be imported from slice
export { fetchBookDetail };
export { selectSavingState, selectDeletingState };
export default bookChaptersSlice.reducer;
//#endregion exports
