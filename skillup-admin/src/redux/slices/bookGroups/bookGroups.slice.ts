import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllBookGroups } from "./bookGroups.middleware";

//#region Declarations
interface IBooks {
  id?: string;
  title: string;
  uiType?: number;
  description?: string;
}

interface IBookGroups {
  title: string;
  uiType: number;
  books: IBooks[];
}

interface IBookGoupsState {
  loading: "idle" | "pending";
  groups: IBookGroups[];
  loadedOnce: boolean;
}

const initialState: IBookGoupsState = {
  loading: "idle",
  loadedOnce: false,
  groups: [],
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
  },
});
//#endregion Reducer

//#region exports
export const {
  bookGroupsLoading,
  bookGroupsLoadSuccess,
  bookGroupsLoadFailed,
  setLoadedOnce,
} = bookGroupsSlice.actions;

export type { IBooks, IBookGroups, IBookGoupsState };
export { fetchAllBookGroups };
export default bookGroupsSlice.reducer;
//#endregion exports
