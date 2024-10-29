import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createRootReducer from './reducers/createRootReducer';
import sagas from './sagas';

const persistConfig = {
  key: 'yandexmap',
  storage,
};

const loggerActionColors = {
  success: 'green',
  failed: 'red',
  started: 'blue',
};

const sagaMiddleware = createSagaMiddleware();

const devMiddlewares =
  process.env.NODE_ENV === 'development'
    ? [
        createLogger({
          collapsed: true,
          duration: true,
          colors: {
            title: (action) => loggerActionColors[action.type.split('.')[1]],
          },
        }),
      ]
    : [];

export default () => {
  const persistedReducer = persistReducer(persistConfig, createRootReducer());

  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, ...devMiddlewares));
  const persistor = persistStore(store);
  sagaMiddleware.run(sagas);
  return { store, persistor };
};