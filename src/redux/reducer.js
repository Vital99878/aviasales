import { response_test } from '../data';

const initial_state = response_test;

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'TRANSFERS':
      let { transfers, visible_tickets, sorted_tickets, filtered_tickets } = state;
      const { quality } = action.payload;
      if (transfers.includes(quality)) {
        transfers = transfers.filter((item) => item !== quality);
      } else {
        transfers.push(quality);
      }
      filtered_tickets = sorted_tickets.filter((ticket) =>
        transfers.includes(ticket.segments[0].stops.length + ticket.segments[1].stops.length)
      );
      visible_tickets = filtered_tickets.splice(state.index, 5);

      return {
        ...state,
        visible_tickets,
        transfers,
        filtered_tickets,
        active_all: transfers.length === 4,
        index: 0,
      };

    case 'ALL_TRANSFERS':
      let { active_all } = state;
      if (state.transfers.length < 4) {
        state.transfers = [0, 1, 2, 3];
        active_all = true;
      } else {
        state.transfers = [];
        active_all = false;
      }

      state.filtered_tickets = state.sorted_tickets.filter((ticket) =>
        state.transfers.includes(ticket.segments[0].stops.length)
      );
      state.visible_tickets = state.filtered_tickets.splice(state.index, 5);

      return {
        ...state,
        active_all: active_all,
        filtered_tickets: state.filtered_tickets,
        visible_tickets: state.visible_tickets,
      };

    case 'SET_ID':
      return { ...state, searchId: action.payload.searchId };

    case 'NEW_TICKETS':
      let { new_tickets, stop } = action.payload;
      state.all_tickets = [...state.all_tickets, ...new_tickets];
      state.sorted_tickets = state.all_tickets
        .filter((ticket) => state.transfers.includes(ticket.segments[0].stops.length))
        .sort((a, b) => a.price - b.price);
      state.visible_tickets = state.sorted_tickets.splice(state.index, 5);

      return {
        ...state,
        all_tickets: state.all_tickets,
        sorted_tickets: state.sorted_tickets,
        visible_tickets: state.visible_tickets,
        filtered_tickets: state.sorted_tickets,
        stop_load: stop,
      };

    case 'TAB':
      const { tab } = action.payload;
      if (tab === 'Самый дешевый') {
        state.sorted_tickets = state.sorted_tickets.sort((a, b) => a.price - b.price);
      }

      if (tab === 'Самый быстрый') {
        state.sorted_tickets = state.sorted_tickets.sort((a, b) => {
          const duration_a = a.segments[0].duration + a.segments[1].duration;
          const duration_b = b.segments[0].duration + b.segments[1].duration;
          return duration_a - duration_b;
        });
      }

      state.filtered_tickets = state.sorted_tickets.filter((ticket) =>
        state.transfers.includes(ticket.segments[0].stops.length + ticket.segments[1].stops.length)
      );

      return {
        ...state,
        sorted_tickets: state.sorted_tickets,
        visible_tickets: state.filtered_tickets.splice(0, 5),
        index: 0,
      };

    case 'MORE':
      let { index } = action.payload;
      index += 5;
      return { ...state, visible_tickets: state.filtered_tickets.splice(index, 5) };

    default:
      return {
        all_tickets: state[0].tickets.sort((a, b) => a.price - b.price),
        visible_tickets: state[0].tickets.splice(0, 5),
        transfers: [0, 1, 2, 3],
        searchId: null,
        stop_load: false,
        active_all: true,
        index: 0,
        sorted_tickets: [],
      };
  }
};

export default reducer;
