import {
  IBookChapters,
  IBookChaptersState,
  selectSavingState,
  selectDeletingState,
  setLoadedOnce,
  setSavingState,
  setDeletingState,
} from './bookChapters.slice';
import bookChaptersSlice from './bookChapters.slice';

import { fetchBookDetail, createNewChapter } from './bookChapters.middleware';

//#region  interfaces
export type { IBookChapters, IBookChaptersState };
//#endregion interfaces

//#region selectors
export { selectSavingState, selectDeletingState };
//#endregion selectors

//#region actions
export { setLoadedOnce, setSavingState, setDeletingState };
//#endregion actions

//#region middleware
export { fetchBookDetail, createNewChapter };
//#endregion middleware

//#region slice
export default bookChaptersSlice;
//#endregion slice
