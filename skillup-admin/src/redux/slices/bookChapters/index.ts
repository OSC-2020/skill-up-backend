import {
  IBookChapters,
  IBookChaptersState,
  selectSavingState,
  selectDeletingState,
  bcSetSavingState_AN,
  bcSetDeletingState_AN,
  bcMoveChapterUpInList_AN,
  bcMoveChapterDownInList_AN,
} from './bookChapters.slice';
import bookChaptersSlice from './bookChapters.slice';

import {
  fetchBookDetail_MW,
  createNewChapter_MW,
  deleteChapter_MW,
  updateChapterTitle_MW,
  updateChapterOrder_MW,
  updateBookTitle_MW,
} from './bookChapters.middleware';

//#region  interfaces
export type { IBookChapters, IBookChaptersState };
//#endregion interfaces

//#region selectors
export { selectSavingState, selectDeletingState };
//#endregion selectors

//#region actions
export {
  bcSetSavingState_AN,
  bcSetDeletingState_AN,
  bcMoveChapterUpInList_AN,
  bcMoveChapterDownInList_AN,
};
//#endregion actions

//#region middleware
export {
  fetchBookDetail_MW,
  createNewChapter_MW,
  deleteChapter_MW,
  updateChapterTitle_MW,
  updateChapterOrder_MW,
  updateBookTitle_MW,
};
//#endregion middleware

//#region slice
export default bookChaptersSlice;
//#endregion slice
