import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBookDetail, IBookChapters } from '../bookChapters';

//#region Declarations

interface IBookGoupsState {
  bookDetailArr: IBookChapters[];
}

const initialState: IBookGoupsState = {
  bookDetailArr: [],
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
      fetchBookDetail.fulfilled,
      (state, action: PayloadAction<IBookChapters>) => {
        state.bookDetailArr.push(action.payload);
      },
    );
  },
});
//#endregion Reducer

//#region exports

export default cachedSlice.reducer;
//#endregion exports
