import { BasketDataState } from '../state.redux';

export const loading = (state: BasketDataState) => {
  state.loading = true;
  state.error = undefined;

  return state;
};
