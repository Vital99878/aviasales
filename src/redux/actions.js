import { getId, getTickets } from '../tickets/tickets_api';

export const toggle_transfers = (quality) => ({ type: 'TRANSFERS', payload: { quality: Number(quality) } });
export const toggle_all_transfers = () => ({ type: 'ALL_TRANSFERS' });

export function get_tickets(id) {
  return async (dispatch) => {
    const [tickets, stop] = await getTickets(id);
    dispatch({ type: 'TICKETS', payload: { tickets, stop } });
  };
}

export function setId() {
  return async (dispatch) => {
    const searchId = await getId();
    dispatch({ type: 'SET_ID', payload: { searchId } });
  };
}
