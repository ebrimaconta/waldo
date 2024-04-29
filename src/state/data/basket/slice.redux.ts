import { AppStorageKey, appStorage } from '@app/utils/app-storage';
import { createSlice } from '@reduxjs/toolkit';
import { BasketDataState, cleanBasketDataState } from './state.redux';
import * as reducers from './reducers';

export const basketDataSlice = createSlice({
  name: 'BasketDataState',
  initialState: appStorage.get(
    AppStorageKey.DATA_BASKET_STATE,
    cleanBasketDataState
  ) as BasketDataState,
  reducers,
});
