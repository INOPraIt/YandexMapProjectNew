import { handleActions } from 'redux-actions';

import { 
  createUserAsync,
  changeUserFieldActionAsync,
  loginedUserActionAsync
} from '../actions/user.actions.js';

const initialState = {
  registred: null,
  logined: null,
  state: {},
  error: null,
};

export default handleActions(
  {
    //success
    [createUserAsync.success]:
      (s, a) =>
        ({ 
          ...s, 
          registred: a.payload.data.success,
          error: a.payload.data && a.payload.data.success ? 
          null: a.payload.data && a.payload.data.error ? 
          a.payload.data.error : 'Что-то пошло не так' 
        }),
    [changeUserFieldActionAsync.success]: (s, { payload: {name, value} } = {}) => ({ ...s, [name]: value}),
    [loginedUserActionAsync.success]: 
      (s, a) => 
        ({ 
          ...s,
          logined: a.payload.data.success,
          error: a.payload.data && a.payload.data.success ?
          null: a.payload.data && a.payload.data.error ?
          a.payload.data.error : 'Что-то пошло не так'
        }),
    //failed
    [createUserAsync.failed]: (s, a) => ({ ...s, state: {}, error: 'Что-то пошло не так'}),
  },
  initialState
);