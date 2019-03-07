import { createStore, applyMiddleware, compose } from 'redux';
// Logger with default options
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer, { REHYDRATION_COMPLETE } from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['register', 'login', 'account', 'form']
  blacklist: ['register', 'login', 'form']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(logger, sagaMiddleware)),
  );
  const persistor = persistStore(store, null, () => store.dispatch({ type: REHYDRATION_COMPLETE }));

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}
