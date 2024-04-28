import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { App } from './components/index.jsx';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <App />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
