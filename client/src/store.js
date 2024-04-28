/* eslint-disable no-undef */

import { batchedSubscribe } from 'redux-batched-subscribe';
import { configureStore } from '@reduxjs/toolkit';
import { debounce } from 'lodash';
import reducer from './services';

// import loggerMiddleware from './middleware/logger';

const preloadedState = {};

const debounceNotify = debounce((listener) => listener(), 100);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(/*logger*/),
  preloadedState,
  enhancers: (getDefaultEnhancers) => {
    return getDefaultEnhancers(batchedSubscribe(debounceNotify)).concat();
  },
  devTools: !import.meta.env.PROD,
});

// if (!import.meta.env.PROD && module.hot) {
//   console.log('hot reloading', import.meta.env.PROD);
//   module.hot.accept('./reducers', () => store.replaceReducer(reducer));
// }

export default store;
