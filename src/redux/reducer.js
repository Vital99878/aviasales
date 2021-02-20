import { response_test } from '../data';

const initial_state = response_test;

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'TRANSFERS':
      let { transfers, all_tickets, visible_tickets } = state;
      const { quality } = action.payload;
      if (transfers.includes(quality)) {
        transfers = transfers.filter((item) => item !== quality);
      } else {
        transfers.push(quality);
      }
      visible_tickets = all_tickets
        .filter((ticket) => transfers.includes(ticket.segments[0].stops.length + ticket.segments[1].stops.length))
        .splice(0, 5);

      return { ...state, all_tickets, visible_tickets, transfers, active_all: transfers.length === 4 };

    case 'ALL_TRANSFERS':
      let { active_all } = state;
      if (state.transfers.length < 4) {
        state.transfers = [0, 1, 2, 3];
        active_all = true;
      } else {
        state.transfers = [];
        active_all = false;
      }

      state.visible_tickets = state.all_tickets
        .filter((ticket) => state.transfers.includes(ticket.segments[0].stops.length))
        .splice(0, 5);

      state.tickets = initial_state[0].tickets.filter((ticket) =>
        state.transfers.includes(ticket.segments[0].stops.length)
      );
      return { ...state, active_all: active_all, visible_tickets: state.visible_tickets };

    case 'SET_ID':
      return { ...state, searchId: action.payload.searchId };

    case 'NEW_TICKETS':
      let { new_tickets, stop } = action.payload;

      state.all_tickets = [...state.all_tickets, ...new_tickets];
      state.visible_tickets = state.all_tickets
        .filter((ticket) => state.transfers.includes(ticket.segments[0].stops.length))
        .splice(0, 5);

      return { ...state, all_tickets: state.all_tickets, visible_tickets: state.visible_tickets, stop_load: stop };

    case 'TAB':
      //      state.all_tickets = state.all_tickets.sort((a, b) => a.price - b.price);
      //      return { ...state, all_tickets: state.all_tickets, visible_tickets: state.all_tickets.splice(0, 5) };
      state.all_tickets = state.all_tickets.sort((a, b) => {
        const duration_a = a.segments[0].duration + a.segments[1].duration;
        const duration_b = b.segments[0].duration + b.segments[1].duration;
        return duration_a - duration_b;
      });

      return { ...state, all_tickets: state.all_tickets, visible_tickets: state.all_tickets.splice(0, 5) };

    default:
      return {
        all_tickets: state[0].tickets,
        visible_tickets: state[0].tickets.splice(0, 5),
        transfers: [0, 1, 2, 3],
        searchId: null,
        stop_load: false,
        active_all: true,
      };
  }
};

export default reducer;
