// eslint-disable-next-line import/prefer-default-export
export const toggle_transfers = (quality) => ({ type: 'TRANSFERS', payload: { quality: Number(quality) } });
export const toggle_all_transfers = () => ({ type: 'ALL_TRANSFERS' });

// if (!state.transfers.includes(quality) ) {
//  state.transfers.push(quality)
// }else {
//  state.transfers = state.transfers.filter(item => item !== quality)
// }
