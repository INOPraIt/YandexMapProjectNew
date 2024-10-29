import { takeEvery } from 'redux-saga/effects';
import { bindAsyncActions } from '../../utils/store/helpers';
import {
  createUser, 
  createUserAsync,
  changeUserFieldAction,
  changeUserFieldActionAsync,
  loginedUserAction,
  loginedUserActionAsync
} from '../actions/user.actions.js';
import UserApi from '../../services/api/user';

function plugeWorker() {
  return true;
}

function changeUserFieldWorker({ name, value }) {
  return { name, value }
}

export function* userSaga() {
  yield takeEvery(createUser, bindAsyncActions(createUserAsync)(UserApi.createUser));
  yield takeEvery(loginedUserAction, bindAsyncActions(loginedUserActionAsync)(UserApi.loginedUser));
  yield takeEvery(changeUserFieldAction, bindAsyncActions(changeUserFieldActionAsync)(changeUserFieldWorker))
}