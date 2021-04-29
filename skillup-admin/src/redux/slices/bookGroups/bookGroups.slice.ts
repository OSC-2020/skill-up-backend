import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import {
  deleteBookGroup,
  fetchAllBookGroups,
  publishBookGroup,
  saveNewBookGroup,
  unpublishBookGroup,
} from "./bookGroups.middleware";

//#region Declarations
interface IBooks {
  id?: string;
  title: string;
  uiType?: number;
  description?: string;
}

interface IBookGroups {
  title: string;
  books: IBooks[];
  uiType?: number;
  id?: string;
  isPublished: boolean;
}

interface IBookGoupsState {
  loading: "idle" | "pending";
  groups: IBookGroups[];
  loadedOnce: boolean;
  savingState: "" | "start" | "done" | "failed";
  deletingState: "" | "start" | "done" | "failed";
}

const initialState: IBookGoupsState = {
  loading: "idle",
  loadedOnce: false,
  groups: [],
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
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllBookGroups.fulfilled,
      (state, action: PayloadAction<IBookGroups[]>) => {
        state.groups = action.payload;
      }
    );
    builder.addCase(saveNewBookGroup.fulfilled, (state) => {
      state.savingState = "";
    });
    builder.addCase(deleteBookGroup.fulfilled, (state) => {
      state.deletingState = "";
    });
    builder.addCase(
      publishBookGroup.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.savingState = "";
        const grp = state.groups.find(
          (grp) => grp.id === action.payload
        ) as IBookGroups;
        grp.isPublished = true;
      }
    );
    builder.addCase(
      unpublishBookGroup.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.savingState = "";
        const grp = state.groups.find(
          (grp) => grp.id === action.payload
        ) as IBookGroups;
        grp.isPublished = false;
      }
    );
  },
});
//#endregion Reducer

//#region Selectors

const selectSavingState = (state: RootState) => state.bookGroups.savingState;
const selectDeletingState = (state: RootState) =>
  state.bookGroups.deletingState;
const selectBookGroupWithId = (groupId: string) => (state: RootState) =>
  state.bookGroups.groups.find((grp) => grp.id === groupId);

//#endregion Selectors

//#region exports
export const {
  setLoadedOnce,
  setSavingState,
  setDeletingState,
} = bookGroupsSlice.actions;

export type { IBooks, IBookGroups, IBookGoupsState };
export { fetchAllBookGroups };
export { selectSavingState, selectDeletingState, selectBookGroupWithId };
export default bookGroupsSlice.reducer;
//#endregion exports
