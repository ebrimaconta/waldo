import { combineReducers } from 'redux';

import { basketDataSlice, BasketDataState } from './basket';

export * from './basket';

export type DataState = {
  basket: BasketDataState;
};

export const initialDataState: DataState = {
  basket: basketDataSlice.getInitialState(),
};

export const dataReducers = combineReducers({
  basket: basketDataSlice.reducer,
});
