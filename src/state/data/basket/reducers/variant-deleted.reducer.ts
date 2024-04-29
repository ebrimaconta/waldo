import { PayloadAction } from '@reduxjs/toolkit';
import { AppStorageKey, appStorage } from '@app/utils/app-storage';
import { BasketDataState } from '../state.redux';
import { MockCart } from '@api/db/cart';

export const variantDeleted = (
  state: BasketDataState,
  action: PayloadAction<MockCart>
) => {
  state.cart = action.payload;

  state.loading = false;
  state.basketOpen = true;
  state.countItems = action.payload.items.length;

  appStorage.set(AppStorageKey.DATA_BASKET_STATE, state);

  return state;
};
