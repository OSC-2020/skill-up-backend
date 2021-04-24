import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchAllBookGroups, saveNewBookGroup } from "./bookGroups.middleware";

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
}

interface IBookGoupsState {
  loading: "idle" | "pending";
  groups: IBookGroups[];
  loadedOnce: boolean;
  savingState: "" | "start" | "done" | "failed";
}

const initialState: IBookGoupsState = {
  loading: "idle",
  loadedOnce: false,
  groups: [],
  savingState: "",
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
    bookGroupsLoading(state, action) {
      // Use a "state machine" approach for loading state instead of booleans
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    bookGroupsLoadSuccess(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
      }
    },
    bookGroupsLoadFailed(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
      }
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
  },
});
//#endregion Reducer

//#region Selectors

const selectSavingState = (state: RootState) => state.bookGroups.savingState;

//#endregion Selectors

//#region exports
export const {
  bookGroupsLoading,
  bookGroupsLoadSuccess,
  bookGroupsLoadFailed,
  setLoadedOnce,
  setSavingState,
} = bookGroupsSlice.actions;

export type { IBooks, IBookGroups, IBookGoupsState };
export { fetchAllBookGroups };
export { selectSavingState };
export default bookGroupsSlice.reducer;
//#endregion exports
