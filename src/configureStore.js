import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import RootReducer from './reducers';

const composeEnhancers = composeWithDevTools({ realtime: true });
const configureStore = () =>
  createStore(RootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

export default configureStore;