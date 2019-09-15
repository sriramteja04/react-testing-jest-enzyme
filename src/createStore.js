import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import ReduxThunk from 'redux-thunk';

export const middleware = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export const store = createStoreWithMiddleware(rootReducer);
