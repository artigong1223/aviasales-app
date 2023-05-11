import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/app/app';
import { TicketStoreServiceProvider } from './components/context/ticketStore-context';
import TicketStoreService from './service/ticketStore-service';

const ticketStoreService = new TicketStoreService();

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <TicketStoreServiceProvider value={ticketStoreService}>
      <App />
    </TicketStoreServiceProvider>
  </Provider>
);
