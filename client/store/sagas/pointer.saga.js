import { takeEvery } from 'redux-saga/effects';
import { bindAsyncActions } from '../../utils/store/helpers';
import {
  createPointer,
  createPointerAsync,
  deletePointer,
  deletePointerAsync
} from '../actions/pointer.actions';
import PointerApi from '../../services/api/pointer';

function plugeWorker() {
  return true;
}

export function* pointerSaga() {
  yield takeEvery(createPointer, bindAsyncActions(createPointerAsync)(PointerApi.createPointer));
  yield takeEvery(deletePointer, bindAsyncActions(deletePointerAsync)(PointerApi.deletePointer));
}