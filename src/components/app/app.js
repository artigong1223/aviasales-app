import React from 'react';

import TicketList from '../ticketList/TicketList';

import classes from './app.module.scss';

const App = () => {
  return (
    <div className={classes.flex}>
      <img className={classes.logo} src="images/Logo.svg" />
      <TicketList />
    </div>
  );
};
export default App;
