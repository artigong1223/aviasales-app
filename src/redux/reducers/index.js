const initialState = {
  ticketsList: {
    tickets: [],
    load: true,
    moreCount: 5,
  },
  filterList: {
    cheap: false,
    fast: false,
    optimal: false,
    checkAll: false,
    checkZero: false,
    checkOne: false,
    checkTwo: false,
    checkThree: false,
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHEAP':
    case 'FAST':
    case 'OPTIMAL':
    case 'CHECKALL':
    case 'CHECKZERO':
    case 'CHECKONE':
    case 'CHECKTWO':
    case 'CHECKTHREE':
      return {
        ...state,
        filterList: updateFilterList(state, action),
      };
    case 'TICKETS_LOADED':
    case 'LOADING':
    case 'MORE':
      return {
        ...state,
        ticketsList: updateTicketsList(state, action),
      };
    default:
      return state;
  }
};
const updateFilterList = (state, action) => {
  switch (action.type) {
    case 'CHEAP':
      return {
        ...state.filterList,
        cheap: state.filterList.cheap ? false : true,
        fast: false,
        optimal: false,
      };
    case 'FAST':
      return {
        ...state.filterList,
        cheap: false,
        fast: state.filterList.fast ? false : true,
        optimal: false,
      };
    case 'OPTIMAL':
      return {
        ...state.filterList,
        cheap: false,
        fast: false,
        optimal: state.filterList.optimal ? false : true,
      };
    case 'CHECKALL':
      return {
        ...state.filterList,
        checkAll:
          state.filterList.checkZero &&
          state.filterList.checkOne &&
          state.filterList.checkTwo &&
          state.filterList.checkThree
            ? false
            : true,
        checkZero:
          state.filterList.checkZero &&
          state.filterList.checkOne &&
          state.filterList.checkTwo &&
          state.filterList.checkThree
            ? false
            : true,
        checkOne:
          state.filterList.checkZero &&
          state.filterList.checkOne &&
          state.filterList.checkTwo &&
          state.filterList.checkThree
            ? false
            : true,
        checkTwo:
          state.filterList.checkZero &&
          state.filterList.checkOne &&
          state.filterList.checkTwo &&
          state.filterList.checkThree
            ? false
            : true,
        checkThree:
          state.filterList.checkZero &&
          state.filterList.checkOne &&
          state.filterList.checkTwo &&
          state.filterList.checkThree
            ? false
            : true,
      };
    case 'CHECKZERO':
      return {
        ...state.filterList,
        checkZero: state.filterList.checkZero ? false : true,
      };
    case 'CHECKONE':
      return {
        ...state.filterList,
        checkOne: state.filterList.checkOne ? false : true,
      };
    case 'CHECKTWO':
      return {
        ...state.filterList,
        checkTwo: state.filterList.checkTwo ? false : true,
      };
    case 'CHECKTHREE':
      return {
        ...state.filterList,
        checkThree: state.filterList.checkThree ? false : true,
      };
    default:
      return state;
  }
};
const updateTicketsList = (state, action) => {
  switch (action.type) {
    case 'TICKETS_LOADED':
      return {
        ...state.ticketsList,
        tickets: action.payload,
        load: false,
      };
    case 'LOADING':
      return {
        ...state.ticketsList,
        load: true,
      };
    case 'MORE':
      return {
        ...state.ticketsList,
        moreCount: state.ticketsList.moreCount + 5,
      };
    default:
      return state;
  }
};
export default reducer;
