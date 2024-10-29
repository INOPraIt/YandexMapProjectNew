import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import pointerReducer from './pointer.reducer';
import newsReducer from './news.reducer';

export default () =>
  combineReducers({
    user: userReducer,
    pointer: pointerReducer,
    news: newsReducer
  });