import jwt from 'jsonwebtoken';

export enum AppStorageKey {
  AUTH_TOKEN = 'WaldoAuthToken',
  DATA_BASKET_STATE = 'WaldoDataBasketState',

  MOCK_CART = 'WaldoMockCart',
}

export const appStorage = {
  protected: [AppStorageKey.DATA_BASKET_STATE] as AppStorageKey[],
  get: <T>(
    key: AppStorageKey,
    fallback?: T,
    validate = true
  ): T | undefined => {
    let parsed: any;
    let secure = true;

    if (appStorage.protected.indexOf(key) >= 0 && validate) {
      if ((typeof localStorage as any) === 'undefined') {
        parsed = fallback;
        secure = false;
      } else {
        let token = localStorage.getItem(AppStorageKey.AUTH_TOKEN);

        if (token) {
          token = JSON.parse(token) as string;

          const date = new Date();
          const jwtDecoded = jwt.decode(token, {
            complete: true,
          });

          if (!jwtDecoded || typeof jwtDecoded.payload === 'string') {
            parsed = fallback;
            secure = false;
          } else if (
            jwtDecoded.payload.exp &&
            jwtDecoded.payload.exp * 1000 < date.getTime() - 864000000
          ) {
            parsed = fallback;
            secure = false;

            appStorage.clean();
          }
        }
      }
    }

    if (secure || !validate) {
      try {
        const item = localStorage.getItem(key);
        parsed = JSON.parse(item as string) as T;
      } catch (e) {
        parsed = undefined;
      }
    }

    return parsed ?? fallback;
  },
  set: (key: AppStorageKey, data: any): void => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  remove: (key: AppStorageKey): void => {
    localStorage.removeItem(key);
  },
  clean: (): void => {
    localStorage.removeItem(AppStorageKey.AUTH_TOKEN);
    localStorage.removeItem(AppStorageKey.DATA_BASKET_STATE);
    localStorage.removeItem(AppStorageKey.MOCK_CART);
  },
};
