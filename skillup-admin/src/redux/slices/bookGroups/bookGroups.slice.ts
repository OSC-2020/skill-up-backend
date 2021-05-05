import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import {
  deleteBookGroup_MW,
  fetchAllBookGroups_MW,
  publishBookGroup_MW,
  saveNewBookGroup_MW,
  unpublishBookGroup_MW,
} from './bookGroups.middleware';

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
  loading: 'idle' | 'pending';
  groups: IBookGroups[];
  savingState: '' | 'start' | 'done' | 'failed';
  deletingState: '' | 'start' | 'done' | 'failed';
}

const initialState: IBookGoupsState = {
  loading: 'idle',
  groups: [],
  savingState: '',
  deletingState: '',
};
//#endregion Declarations

//#region Reducer
export const bookGroupsSlice = createSlice({
  name: 'bookGroups',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    bgSetSavingState_AN(
      state,
      action: PayloadAction<'' | 'start' | 'done' | 'failed'>,
    ) {
      state.savingState = action.payload;
    },
    bgSetDeletingState_AN(
      state,
      action: PayloadAction<'' | 'start' | 'done' | 'failed'>,
    ) {
      state.deletingState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllBookGroups_MW.fulfilled,
      (state, action: PayloadAction<IBookGroups[]>) => {
        state.groups = action.payload;
      },
    );
    builder.addCase(saveNewBookGroup_MW.fulfilled, (state) => {
      state.savingState = '';
    });
    builder.addCase(deleteBookGroup_MW.fulfilled, (state) => {
      state.deletingState = '';
    });
    builder.addCase(
      publishBookGroup_MW.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.savingState = '';
        const grp = state.groups.find(
          (grp) => grp.id === action.payload,
        ) as IBookGroups;
        grp.isPublished = true;
      },
    );
    builder.addCase(
      unpublishBookGroup_MW.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.savingState = '';
        const grp = state.groups.find(
          (grp) => grp.id === action.payload,
        ) as IBookGroups;
        grp.isPublished = false;
      },
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
  bgSetSavingState_AN,
  bgSetDeletingState_AN,
} = bookGroupsSlice.actions;

export type { IBooks, IBookGroups, IBookGoupsState };
export { selectSavingState, selectDeletingState, selectBookGroupWithId };
export default bookGroupsSlice.reducer;
//#endregion exports
