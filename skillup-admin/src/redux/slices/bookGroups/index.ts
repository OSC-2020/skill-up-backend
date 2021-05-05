import {
  IBooks,
  IBookGroups,
  IBookGoupsState,
  selectSavingState,
  selectDeletingState,
  selectBookGroupWithId,
  bgSetSavingState_AN,
  bgSetDeletingState_AN,
} from './bookGroups.slice';
import bookGroupsSlice from './bookGroups.slice';

import {
  fetchAllBookGroups_MW,
  saveNewBookGroup_MW,
  modifyBookGroup_MW,
  deleteBookGroup_MW,
  publishBookGroup_MW,
  unpublishBookGroup_MW,
} from './bookGroups.middleware';

//#region  interfaces
export type { IBooks, IBookGroups, IBookGoupsState };
//#endregion interfaces

//#region selectors
export { selectSavingState, selectDeletingState, selectBookGroupWithId };
//#endregion selectors

//#region actions
export { bgSetSavingState_AN, bgSetDeletingState_AN };
//#endregion actions

//#region middleware
export {
  fetchAllBookGroups_MW,
  saveNewBookGroup_MW,
  modifyBookGroup_MW,
  deleteBookGroup_MW,
  publishBookGroup_MW,
  unpublishBookGroup_MW,
};
//#endregion middleware

//#region slice
export default bookGroupsSlice;
//#endregion slice
