import { handleActions } from 'redux-actions';

import {
  createNewsAsync,
  deleteNewsAsync
} from '../actions/news.actions';

const initialState = {
  state: [],
  error: null,
};

export default handleActions(
  {
    //success
    [createNewsAsync.success]:
    (s, a) =>
      ({ 
        ...s, 
        state: [...s.state, a.payload.data.news],
        error: a.payload.data && a.payload.data.success ? 
        null: a.payload.data && a.payload.data.error ? 
        a.payload.data.error : 'Что-то пошло не так' 
      }),

      [deleteNewsAsync.success]: (s, a) => {
        const updatedState = s.state.filter(news => news.named !== a.payload.named);
        return { ...s, state: updatedState, error: null };
      },
  
    //failed
    [createNewsAsync.failed]: (s, a) => ({ ...s, state: [], error: 'Что-то пошло не так' }),
    [deleteNewsAsync.failed]: (s, a) => ({ ...s, error: 'Не удалось удалить новость' }),
  },
  initialState
);