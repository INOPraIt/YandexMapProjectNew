import { takeEvery } from 'redux-saga/effects';
import { bindAsyncActions } from '../../utils/store/helpers';
import {
  createNews,
  createNewsAsync,
  deleteNews,
  deleteNewsAsync
} from '../actions/news.actions';
import NewsApi from '../../services/api/news';

function plugeWorker() {
  return true;
}

// function* deleteNewsWorker(action) {
//   const { named } = action.payload;
//   try {
//     const result = yield NewsApi.deleteNews(named);
//     yield put(deleteNewsAsync.success(result));
//   } catch (error) {
//     yield put(deleteNewsAsync.failed(error));
//   }
// }

export function* newsSaga() {
  yield takeEvery(createNews, bindAsyncActions(createNewsAsync)(NewsApi.createNews));
  yield takeEvery(deleteNews, bindAsyncActions(deleteNewsAsync)(NewsApi.deleteNews));
}