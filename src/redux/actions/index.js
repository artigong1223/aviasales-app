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
const fetchTicket = (ticketStoreService, dispatch) => () => {
  dispatch(loading());
  ticketStoreService
    .getTickets()
    .then((data) => {
      return dispatch(ticketsLoaded(data));
    })
    .catch((e) => {
      console.log(e);
      return fetchTicket(ticketStoreService, dispatch)();
    });
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
