const initialState = {
  tickets: [],
  cheap: false,
  fast: false,
  optimal: false,
  checkAll: false,
  checkZero: false,
  checkOne: false,
  checkTwo: false,
  checkThree: false,
  load: true,
  err: null,
};
let ticketsDef = [];
let filtersDef = [];
function filterCheck(c) {
  return (g) => g.segments[0].stops.length === c || g.segments[1].stops.length === c;
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKETS_LOADED':
      ticketsDef = [...action.payload];
      return {
        ...state,
        tickets: filtersDef.length !== 0 ? ticketsDef : [],
        load: false,
      };
    case 'CHEAP':
      return {
        ...state,
        tickets:
          !state.cheap && filtersDef.length !== 0 ? [...filtersDef].sort((a, b) => a.price - b.price) : filtersDef,
        cheap: state.cheap ? false : true,
        fast: false,
        optimal: false,
      };
    case 'FAST':
      return {
        ...state,
        tickets:
          !state.fast && filtersDef.length !== 0
            ? [...filtersDef].sort(
                (a, b) =>
                  a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
              )
            : filtersDef,
        cheap: false,
        fast: state.fast ? false : true,
        optimal: false,
      };
    case 'OPTIMAL':
      return {
        ...state,
        tickets:
          !state.optimal && filtersDef.length !== 0
            ? [...filtersDef]
                .sort((a, b) => a.price - b.price)
                .sort(
                  (a, b) =>
                    a.segments[0].stops.length +
                    a.segments[1].stops.length -
                    (b.segments[0].stops.length + b.segments[1].stops.length)
                )
            : filtersDef,
        cheap: false,
        fast: false,
        optimal: state.optimal ? false : true,
      };
    case 'CHECKALL':
      !(state.checkZero && state.checkOne && state.checkTwo && state.checkThree)
        ? (filtersDef = [...ticketsDef])
        : (filtersDef = []);
      return {
        ...state,
        tickets: filtersDef,
        checkAll: state.checkZero && state.checkOne && state.checkTwo && state.checkThree ? false : true,
        checkZero: state.checkZero && state.checkOne && state.checkTwo && state.checkThree ? false : true,
        checkOne: state.checkZero && state.checkOne && state.checkTwo && state.checkThree ? false : true,
        checkTwo: state.checkZero && state.checkOne && state.checkTwo && state.checkThree ? false : true,
        checkThree: state.checkZero && state.checkOne && state.checkTwo && state.checkThree ? false : true,
      };
    case 'CHECKZERO':
      !state.checkZero
        ? (filtersDef = [...filtersDef, ...ticketsDef.filter(filterCheck(0))].filter(
            (a, b) => [...filtersDef, ...ticketsDef.filter(filterCheck(0))].indexOf(a) === b
          ))
        : (filtersDef = filtersDef.filter((g) => !ticketsDef.filter(filterCheck(0)).includes(g)));
      return {
        ...state,
        tickets: filtersDef,
        checkZero: state.checkZero ? false : true,
      };
    case 'CHECKONE':
      !state.checkOne
        ? (filtersDef = [...filtersDef, ...ticketsDef.filter(filterCheck(1))].filter(
            (a, b) => [...filtersDef, ...ticketsDef.filter(filterCheck(1))].indexOf(a) === b
          ))
        : (filtersDef = filtersDef.filter((g) => !ticketsDef.filter(filterCheck(1)).includes(g)));
      return {
        ...state,
        tickets: filtersDef,
        checkOne: state.checkOne ? false : true,
      };
    case 'CHECKTWO':
      !state.checkTwo
        ? (filtersDef = [...filtersDef, ...ticketsDef.filter(filterCheck(2))].filter(
            (a, b) => [...filtersDef, ...ticketsDef.filter(filterCheck(2))].indexOf(a) === b
          ))
        : (filtersDef = filtersDef.filter((g) => !ticketsDef.filter(filterCheck(2)).includes(g)));
      return {
        ...state,
        tickets: filtersDef,
        checkTwo: state.checkTwo ? false : true,
      };
    case 'CHECKTHREE':
      !state.checkThree
        ? (filtersDef = [...filtersDef, ...ticketsDef.filter(filterCheck(3))].filter(
            (a, b) => [...filtersDef, ...ticketsDef.filter(filterCheck(3))].indexOf(a) === b
          ))
        : (filtersDef = filtersDef.filter((g) => !ticketsDef.filter(filterCheck(3)).includes(g)));
      return {
        ...state,
        tickets: filtersDef,
        checkThree: state.checkThree ? false : true,
      };
    case 'LOADING':
      return {
        ...state,
        load: true,
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
export default reducer;
