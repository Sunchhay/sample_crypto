import {combineReducers} from '@reduxjs/toolkit';
import { CategoryReducer } from './category.reducer';
import { loadingReducer } from './loading.reducer';
import { NewsReducer } from './news.reducer';

const rootReducers = combineReducers({
  news: NewsReducer,
  category: CategoryReducer,
  loading: loadingReducer
});

export default rootReducers;
