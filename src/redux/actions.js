import { getId, getTickets } from '../tickets/tickets_api';

export const toggle_transfers = (transfers) => ({
  type: 'TRANSFERS',
  transfers,
});

export const select_all_transfers = (active_all, transfers) => ({
  type: 'ALL_TRANSFERS',
  active_all,
  transfers,
});

export function set_id() {
  return async (dispatch) => {
    const searchId = await getId();
    dispatch({ type: 'SET_ID', searchId });
  };
}

export const get_tickets = (id) => {
  return async (dispatch) => {
    const [new_tickets, stop] = await getTickets(id);
    dispatch({ type: 'NEW_TICKETS', new_tickets, stop });
  };
};
