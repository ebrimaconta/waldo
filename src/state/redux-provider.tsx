"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { dataReducers, DataState, initialDataState } from "./data";

export * from "./data";

export type AppState = {
  data: DataState;
};

export const preloadedState: AppState = {
  data: initialDataState,
};

const reducers = combineReducers({
  data: dataReducers,
});

export const makeStore = () => {
  return configureStore({
    reducer: reducers,
    preloadedState,
    devTools: process.env.NEXT_PUBLIC_APP_ENV !== "prod",
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
