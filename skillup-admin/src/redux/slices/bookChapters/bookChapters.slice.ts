import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { moveAnElementInArray } from '../../../utilities/array';
import { flagStatus, RootState } from '../../store';
import { IChapterInfo } from '../chapterDetail/chapterDetail';
import {
  createNewChapter_MW,
  deleteChapter_MW,
  fetchBookDetail_MW,
  updateChapterOrder_MW,
  updateChapterTitle_MW,
} from './bookChapters.middleware';

interface IFlags {
  loading: flagStatus;
  saving: flagStatus;
  deleting: flagStatus;
  updating: flagStatus;
}
interface IBookChapters {
  id: string;
  title: string;
  totalChapters: number;
  completedByCount: number;
  chapters: IChapterInfo[];
}

//#region Declarations

interface IBookChaptersState extends IFlags {
  bookInfo: IBookChapters | null;
  isChapterOrderModified: boolean;
}

const initialState: IBookChaptersState = {
  bookInfo: null,
  saving: '',
  deleting: '',
  updating: '',
  loading: '',
  isChapterOrderModified: false,
};
//#endregion Declarations

//#region Reducer
export const bookChaptersSlice = createSlice({
  name: 'currentBookDetail',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    bcSetSavingState_AN(state, action: PayloadAction<flagStatus>) {
      state.saving = action.payload;
    },
    bcSetDeletingState_AN(state, action: PayloadAction<flagStatus>) {
      state.deleting = action.payload;
    },
    bcMoveChapterUpInList_AN(state, action: PayloadAction<number>) {
      state.isChapterOrderModified = true;
      moveAnElementInArray(
        state.bookInfo?.chapters as IChapterInfo[],
        action.payload,
        action.payload + 1,
      );
    },
    bcMoveChapterDownInList_AN(state, action: PayloadAction<number>) {
      state.isChapterOrderModified = true;
      moveAnElementInArray(
        state.bookInfo?.chapters as IChapterInfo[],
        action.payload,
        action.payload - 1,
      );
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
      state.saving = 'done';
    });
    builder.addCase(deleteChapter_MW.fulfilled, (state, action) => {
      state.deleting = 'done';
    });
    builder.addCase(updateChapterTitle_MW.fulfilled, (state, action) => {
      state.saving = 'done';
    });
    builder.addCase(updateChapterOrder_MW.fulfilled, (state, action) => {
      state.isChapterOrderModified = false;
    });
  },
});
//#endregion Reducer

//#region Selectors

const selectSavingState = (state: RootState) => state.currentBookDetail.saving;
const selectDeletingState = (state: RootState) =>
  state.currentBookDetail.deleting;

//#endregion Selectors

//#region exports
export const {
  bcSetSavingState_AN,
  bcSetDeletingState_AN,
  bcMoveChapterUpInList_AN,
  bcMoveChapterDownInList_AN,
} = bookChaptersSlice.actions;

export type { IBookChapters, IBookChaptersState };
export { selectSavingState, selectDeletingState };
export default bookChaptersSlice.reducer;
//#endregion exports
