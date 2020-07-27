import { createStore, combineReducers } from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import productReducer from '../reducers/productreducer';
import uiReducer from '../reducers/uireducer';
import userReducer from '../reducers/userreducer';

const rootReducer = combineReducers({productReducer, uiReducer, userReducer})
const initializeStore = initialState => {
  return createStore(rootReducer, initialState);
};
 
// exports the functionality to initialize the store
// rather than exporting the store instance
//export default initializeStore;
export const wrapper = createWrapper(initializeStore, {debug: true});