'use client';

import { FC, ReactNode, useContext, createContext } from 'react';
import {
  AppState,
  BasketDataState,
  basketDataSlice,
  preloadedState,
  useAppDispatch,
  useAppSelector,
} from '@app/state/redux-provider';
import { MockCart } from '@api/db/cart';

interface BasketContextProps {
  basket: BasketDataState;
  basketCreated: (data: any) => void;
  basketClean: () => void;
  basketClear: () => void;
  basketError: (data: any) => void;
  basketLoading: () => void;
  variantAdded: (data: any) => void;
  variantUpdated: (data: any) => void;
  variantDeleted: (data: any) => void;
}

const BasketContext = createContext<BasketContextProps>({
  basket: preloadedState.data.basket,
  basketCreated: () => {},
  basketClean: () => {},
  basketClear: () => {},
  basketError: () => {},
  basketLoading: () => {},
  variantAdded: () => {},
  variantUpdated: () => {},
  variantDeleted: () => {},
});

// =======================================================
type BasketProviderProps = { children: ReactNode };
// =======================================================

export const BasketProvider: FC<BasketProviderProps> = ({ children }) => {
  const { basket } = useAppSelector((state: AppState) => state.data);

  const dispatch = useAppDispatch();

  const basketCreated = (data: MockCart) =>
    dispatch(basketDataSlice.actions.cartAdded(data));
  const basketClean = () => dispatch(basketDataSlice.actions.clean());
  const basketClear = () => dispatch(basketDataSlice.actions.clear());
  const basketError = (data: any) =>
    dispatch(basketDataSlice.actions.error(data));
  const basketLoading = () => dispatch(basketDataSlice.actions.loading());
  const variantAdded = (data: any) =>
    dispatch(basketDataSlice.actions.variantAdded(data));
  const variantUpdated = (data: any) =>
    dispatch(basketDataSlice.actions.variantUpdated(data));
  const variantDeleted = (data: any) =>
    dispatch(basketDataSlice.actions.variantDeleted(data));

  return (
    <BasketContext.Provider
      value={{
        basket,
        basketCreated,
        basketClean,
        basketClear,
        basketError,
        basketLoading,
        variantAdded,
        variantUpdated,
        variantDeleted,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasketContext = () =>
  useContext<BasketContextProps>(BasketContext);

export default BasketContext;
