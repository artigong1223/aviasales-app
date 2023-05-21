import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './components/app/app';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
