const reducer = (state, action) => {
  switch (action.type) {
    case 'TRANSFERS':
      return {
        ...state,
        transfers: action.transfers,
        active_all: action.active_all,
        index: 5,
      };

    case 'ALL_TRANSFERS':
      return {
        ...state,
        active_all: action.active_all,
        transfers: action.transfers,
        index: 5,
      };

    case 'SET_ID':
      return { ...state, searchId: action.searchId };

    case 'NEW_TICKETS':
      return {
        ...state,
        all_tickets: [...state.all_tickets, ...action.new_tickets],
        index: 5,
      };

    case 'STOP':
      return {
        ...state,
        stop_load: action.stop_load,
      };

    case 'TAB':
      return {
        ...state,
        tab_value: action.tab_value,
        index: 5,
      };

    case 'MORE':
      return {
        ...state,
        index: action.index,
      };

    default:
      return {
        tab_value: 'Самый дешевый',
        all_tickets: [],
        transfers: [0, 1, 2, 3],
        searchId: '',
        stop_load: false,
        active_all: true,
        index: 5,
        visible_tickets: [],
      };
  }
};

export default reducer;
