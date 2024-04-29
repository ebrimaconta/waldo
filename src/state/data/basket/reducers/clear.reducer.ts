import { AppStorageKey, appStorage } from '@app/utils/app-storage';
import { BasketDataState } from '../state.redux';

export const clear = (state: BasketDataState) => {
  state.loading = false;
  state.error = undefined;

  appStorage.set(AppStorageKey.DATA_BASKET_STATE, state);

  return state;
};
