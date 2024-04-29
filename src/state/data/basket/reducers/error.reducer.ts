import { PayloadAction } from '@reduxjs/toolkit';
import { AppStorageKey, appStorage } from '@app/utils/app-storage';
import { BasketDataState } from '../state.redux';

export const error = (
  state: BasketDataState,
  action: PayloadAction<string>
) => {
  state.loading = false;
  state.error = action.payload;

  appStorage.set(AppStorageKey.DATA_BASKET_STATE, state);

  return state;
};
