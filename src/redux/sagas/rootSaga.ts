import {all} from 'redux-saga/effects';
import { CategoryWatchSaga } from './category.saga';
import { NewsWatchSaga } from './news.saga';

function* rootSaga() {
  yield all([
    NewsWatchSaga(),
    CategoryWatchSaga()
  ]);
}

export default rootSaga;
