import {
  IBooks,
  IBookGroups,
  IBookGoupsState,
  selectSavingState,
  selectDeletingState,
  selectBookGroupWithId,
} from './bookGroups.slice';
import bookGroupsSlice from './bookGroups.slice';

import {
  fetchAllBookGroups,
  saveNewBookGroup,
  modifyBookGroup,
  deleteBookGroup,
  publishBookGroup,
  unpublishBookGroup,
} from './bookGroups.middleware';

//#region  interfaces
export type { IBooks, IBookGroups, IBookGoupsState };
//#endregion interfaces

//#region selectors
export { selectSavingState, selectDeletingState, selectBookGroupWithId };
//#endregion selectors

//#region middleware
export {
  fetchAllBookGroups,
  saveNewBookGroup,
  modifyBookGroup,
  deleteBookGroup,
  publishBookGroup,
  unpublishBookGroup,
};
//#endregion middleware

//#region slice
export default bookGroupsSlice;
//#endregion slice
