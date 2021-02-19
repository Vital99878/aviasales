import { response_test } from '../data';

const initial_state = response_test;

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'TRANSFERS':
      const { quality } = action.payload;
      if (state.transfers.includes(quality)) {
        state.transfers = state.transfers.filter((item) => item !== quality);
      } else {
        state.transfers.push(quality);
      }
      state.tickets = initial_state[0].tickets.filter((ticket) =>
        state.transfers.includes(ticket.segments[0].stops.length)
      );

      return {
        tickets: state.tickets,
        transfers: state.transfers,
        active_all: state.transfers.length === 4,
        load_tickets: true,
      };

    case 'ALL_TRANSFERS':
      if (state.transfers.length < 4) {
        state.transfers = [0, 1, 2, 3];
      } else {
        state.transfers = [];
      }
      state.tickets = initial_state[0].tickets.filter((ticket) =>
        state.transfers.includes(ticket.segments[0].stops.length)
      );
      return { tickets: state.tickets, transfers: state.transfers, active_all: !state.active_all, load_tickets: true };

    case 'TICKETS':
      const { tickets } = action.payload;
      return { tickets, load_tickets: true, transfers: [] };

    default:
      return { tickets: state[0].tickets, transfers: [], load_tickets: false };
  }
};

export default reducer;