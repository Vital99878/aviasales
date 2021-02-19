import { getId, getTickets } from '../tickets/tickets_api';

export const toggle_transfers = (quality) => ({ type: 'TRANSFERS', payload: { quality: Number(quality) } });
export const toggle_all_transfers = () => ({ type: 'ALL_TRANSFERS' });

export function get_tickets() {
  return async (dispatch) => {
    const [tickets, load_all] = await getId().then((res) => getTickets(res));
    dispatch({ type: 'TICKETS', payload: { tickets, load_all } });
  };
}
