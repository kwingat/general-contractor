import { combineReducers } from '@reduxjs/toolkit';
import login from './reducers/login';

const reducer = combineReducers({ login });

export default reducer;
