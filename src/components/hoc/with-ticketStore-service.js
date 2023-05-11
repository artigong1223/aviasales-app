import React from 'react';

import { TicketStoreServiceConsumer } from '../context/ticketStore-context';

const withTicketStoreService = () => (Wrapped) => {
  return function a(props) {
    return (
      <TicketStoreServiceConsumer>
        {(ticketStoreService) => {
          return <Wrapped {...props} ticketStoreService={ticketStoreService} />;
        }}
      </TicketStoreServiceConsumer>
    );
  };
};

export default withTicketStoreService;
