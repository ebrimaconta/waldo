import { AppStorageKey, appStorage } from '@app/utils/app-storage';
import { BasketDataState } from '../state.redux';

export const clean = (state: BasketDataState) => {
  state.loading = false;
  state.basketOpen = false;
  state.countItems = 0;

  state.cart = undefined;

  appStorage.set(AppStorageKey.DATA_BASKET_STATE, state);

  return state;
};
