import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBookDetail_MW, IBookChapters } from '../bookChapters';

//#region Declarations

interface IBookGoupsState {
  bookDetailMap: { [key: string]: IBookChapters };
}

const initialState: IBookGoupsState = {
  bookDetailMap: {},
};
//#endregion Declarations

//#region Reducer
export const cachedSlice = createSlice({
  name: 'cached',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchBookDetail_MW.fulfilled,
      (state, action: PayloadAction<IBookChapters>) => {
        state.bookDetailMap[action.payload.id] = action.payload;
      },
    );
  },
});
//#endregion Reducer

//#region exports

export default cachedSlice.reducer;
//#endregion exports
