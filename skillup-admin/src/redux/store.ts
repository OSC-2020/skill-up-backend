import { configureStore } from '@reduxjs/toolkit';
import bookChaptersSliceReducer from './slices/bookChapters';
import bookGroupsSliceReducer from './slices/bookGroups';
import cachedSlice from './slices/cached/cached.slice';

const store = configureStore({
  reducer: {
    bookGroups: bookGroupsSliceReducer,
    currentBookDetail: bookChaptersSliceReducer,
    cached: cachedSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
