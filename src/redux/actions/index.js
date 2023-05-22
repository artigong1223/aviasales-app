const ticketsLoaded = (newTickets) => {
  return {
    type: 'TICKETS_LOADED',
    payload: newTickets,
  };
};
const cheapClick = () => {
  return {
    type: 'CHEAP',
  };
};
const fastClick = () => {
  return {
    type: 'FAST',
  };
};
const optimalClick = () => {
  return {
    type: 'OPTIMAL',
  };
};
const checkedClickAll = () => {
  return {
    type: 'CHECKALL',
  };
};
const checkedClickZero = () => {
  return {
    type: 'CHECKZERO',
  };
};
const checkedClickOne = () => {
  return {
    type: 'CHECKONE',
  };
};
const checkedClickTwo = () => {
  return {
    type: 'CHECKTWO',
  };
};
const checkedClickThree = () => {
  return {
    type: 'CHECKTHREE',
  };
};
const loading = () => {
  return {
    type: 'LOADING',
  };
};
const more = () => {
  return {
    type: 'MORE',
  };
};
const error = (error) => {
  return {
    type: 'ERROR',
    payload: error,
  };
};
let id;
const fetchTicket = (ticketStoreService, dispatch) => () => {
  dispatch(loading());
  if (!id) {
    ticketStoreService.initSearch().then((g) => {
      id = g;
      ticketStoreService
        .getTickets(id)
        .then((data) => data)
        .catch((e) => {
          e.response.status !== 500 ? dispatch(error(e)) : null;
          return fetchTicket(ticketStoreService, dispatch)();
        });
    });
  } else {
    ticketStoreService
      .getTickets(id)
      .then((data) => data)
      .catch((e) => {
        e.response.status !== 500 ? dispatch(error(e)) : null;
        return fetchTicket(ticketStoreService, dispatch)();
      });
  }
  dispatch(ticketsLoaded(ticketStoreService.ticketsList));
};
export {
  fetchTicket,
  cheapClick,
  fastClick,
  optimalClick,
  checkedClickZero,
  checkedClickAll,
  checkedClickOne,
  checkedClickTwo,
  checkedClickThree,
  loading,
  more,
};
