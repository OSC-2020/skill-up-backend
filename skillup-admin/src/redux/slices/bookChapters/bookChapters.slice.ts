import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IChapterInfoModel } from "../chapterDetail/chapterDetail";

interface IBookChapters {
  id: string;
  title: string;
  totalChapters: number;
  completedByCount: number;
  chapters: IChapterInfoModel[];
}

//#region Declarations

interface IBookChaptersState {
  loading: "idle" | "pending";
  bookInfo: IBookChapters | null;
  loadedOnce: boolean;
  savingState: "" | "start" | "done" | "failed";
  deletingState: "" | "start" | "done" | "failed";
}

const initialState: IBookChaptersState = {
  loading: "idle",
  loadedOnce: false,
  bookInfo: null,
  savingState: "",
  deletingState: "",
};
//#endregion Declarations

//#region Reducer
export const bookGroupsSlice = createSlice({
  name: "bookGroups",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoadedOnce(state, action: PayloadAction<boolean>) {
      state.loadedOnce = action.payload;
    },
    setSavingState(
      state,
      action: PayloadAction<"" | "start" | "done" | "failed">
    ) {
      state.savingState = action.payload;
    },
    setDeletingState(
      state,
      action: PayloadAction<"" | "start" | "done" | "failed">
    ) {
      state.deletingState = action.payload;
    },
  },
});
//#endregion Reducer

//#region Selectors

const selectSavingState = (state: RootState) => state.bookGroups.savingState;
const selectDeletingState = (state: RootState) =>
  state.bookGroups.deletingState;

//#endregion Selectors

//#region exports
export const {
  setLoadedOnce,
  setSavingState,
  setDeletingState,
} = bookGroupsSlice.actions;

export type { IBookChapters, IBookChaptersState };
export { selectSavingState, selectDeletingState };
export default bookGroupsSlice.reducer;
//#endregion exports
