import { handleActions } from 'redux-actions';

import {
  createPointerAsync,
  deletePointerAsync
} from '../actions/pointer.actions';

const initialState = {
  state: [],
  error: null,
};

export default handleActions(
  {
    //success
    [createPointerAsync.success]:
    (s, a) =>
      ({ 
        ...s, 
        state: [...s.state, a.payload.data.pointer],
        error: a.payload.data && a.payload.data.success ? 
        null: a.payload.data && a.payload.data.error ? 
        a.payload.data.error : 'Что-то пошло не так' 
      }),
      [deletePointerAsync.success]: (s, a) => {
        const updatedState = s.state.filter(news => news.named !== a.payload.named);
        return { ...s, state: updatedState, error: null };
      },
    //failed
    [createPointerAsync.failed]: (s, a) => ({ ...s, state: [], error: 'Что-то пошло не так' }),
    [deletePointerAsync.failed]: (s, a) => ({ ...s, error: 'Не удалось удалить точку' }),
  },
  initialState
);