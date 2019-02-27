import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = {};
// const thunkMiddleware = createThunkMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
  );
  return store;
}