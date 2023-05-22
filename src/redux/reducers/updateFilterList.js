const initialState = {
  cheap: false,
  fast: false,
  optimal: false,
  checkAll: false,
  checkZero: false,
  checkOne: false,
  checkTwo: false,
  checkThree: false,
};

const updateFilterList = (state = initialState, action) => {
  switch (action.type) {
    case 'CHEAP':
      return {
        ...state,
        cheap: state.cheap ? false : true,
        fast: false,
        optimal: false,
      };
    case 'FAST':
      return {
        ...state,
        cheap: false,
        fast: state.fast ? false : true,
        optimal: false,
      };
    case 'OPTIMAL':
      return {
        ...state,
        cheap: false,
        fast: false,
        optimal: state.optimal ? false : true,
      };
    case 'CHECKALL':
      return {
        ...state,
        checkAll: state.checkZero && state.checkOne && state.checkTwo && state.checkThree ? false : true,
        checkZero: state.checkZero && state.checkOne && state.checkTwo && state.checkThree ? false : true,
        checkOne: state.checkZero && state.checkOne && state.checkTwo && state.checkThree ? false : true,
        checkTwo: state.checkZero && state.checkOne && state.checkTwo && state.checkThree ? false : true,
        checkThree: state.checkZero && state.checkOne && state.checkTwo && state.checkThree ? false : true,
      };
    case 'CHECKZERO':
      return {
        ...state,
        checkZero: state.checkZero ? false : true,
      };
    case 'CHECKONE':
      return {
        ...state,
        checkOne: state.checkOne ? false : true,
      };
    case 'CHECKTWO':
      return {
        ...state,
        checkTwo: state.checkTwo ? false : true,
      };
    case 'CHECKTHREE':
      return {
        ...state,
        checkThree: state.checkThree ? false : true,
      };
    default:
      return state;
  }
};
export default updateFilterList;
