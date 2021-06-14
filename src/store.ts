import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loading from './features/loading';
import { reposApi } from './features/queryRepos';
import simpleRepos from './features/simpleRepos';
import thunkRepos from './features/thunkRepos';

const rootReducer = combineReducers({
  loading: loading.reducer,
  [reposApi.reducerPath]: reposApi.reducer,
  simpleRepos: simpleRepos.reducer,
  thunkRepos: thunkRepos.reducer 
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(reposApi.middleware),
});
export default store;
