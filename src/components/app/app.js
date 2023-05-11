import React from 'react';

import Filters from '../filters/Filters';
import TicketList from '../ticketList/TicketList';
import { withTicketStoreService } from '../hoc';

import './app.scss';

const App = () => {
  return (
    <div className="flex">
      <img className="logo" src="images/Logo.svg" />
      <Filters />
      <TicketList />
    </div>
  );
};
export default withTicketStoreService()(App);
