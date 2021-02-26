import { getId, getTickets } from '../tickets/tickets_api';

export const toggle_transfers = (quality) => ({ type: 'TRANSFERS', payload: { quality: Number(quality) } });
export const select_all_transfers = (filtered_tickets, visible_tickets, active_all, transfers) => ({
  type: 'ALL_TRANSFERS',
  filtered_tickets,
  visible_tickets,
  active_all,
  transfers,
});

export function setId() {
  return async (dispatch) => {
    const searchId = await getId();
    dispatch({ type: 'SET_ID', searchId });
  };
}

export const get_tickets = (id) => {
  return async (dispatch) => {
    const [new_tickets, stop] = await getTickets(id);
    dispatch({ type: 'NEW_TICKETS', payload: { new_tickets, stop } });
  };
};
