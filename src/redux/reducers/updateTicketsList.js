const initialState = {
  tickets: [],
  load: true,
  moreCount: 5,
  err: null,
};

const updateTicketsList = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKETS_LOADED':
      return {
        ...state,
        tickets: action.payload,
        load: false,
      };
    case 'LOADING':
      return {
        ...state,
        load: true,
      };
    case 'MORE':
      return {
        ...state,
        moreCount: state.moreCount + 5,
      };
    case 'ERROR':
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
};

export default updateTicketsList;
