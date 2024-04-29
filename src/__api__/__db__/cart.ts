// FOLLOWING CODE IS A MOCK SERVER IMPLEMENTATION
// THIS IS NOT A REAL SERVER

import { AxiosRequestConfig } from 'axios';
import { AppStorageKey, appStorage } from '@app/utils/app-storage';
import Mock from '../mock';

export type MockVariant = {
  cartId: number;
  variantId: number;
  leftEyeQuantity: number;
  rightEyeQuantity: number;
};

export type MockCartItem = {
  variantId: number;
  leftEyeQuantity: number;
  rightEyeQuantity: number;
  price: number;
};

export type MockCart = {
  id: number;
  items: MockCartItem[];
  total: number;
};

/**
 * Get cart
 * This is a mock implementation. It returns a cart object.
 */
Mock.onGet('/api/cart').reply(async (config: AxiosRequestConfig) => {
  try {
    const cart: MockCart | undefined = appStorage.get(AppStorageKey.MOCK_CART);

    return [200, { data: cart }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

/**
 * Create cart
 * This is a mock implementation. It creates a new cart.
 */
Mock.onPost('/api/cart').reply(async () => {
  try {
    const cart = {
      id: 999,
      items: [],
      total: 0,
    };

    appStorage.set(AppStorageKey.MOCK_CART, cart);

    return [200, { data: cart }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

/**
 * Add variant to cart
 * This is a mock implementation. It adds a variant to the cart.
 */
Mock.onPost('/api/cart/variant').reply(async (config: AxiosRequestConfig) => {
  try {
    const cart: MockCart | undefined = appStorage.get(AppStorageKey.MOCK_CART);

    if (!cart?.items) return [401, { message: 'Bad Request' }];

    const { params } = JSON.parse(config.data);
    const variant = params;

    const existingItem = cart.items.find(
      (item) => item.variantId === variant.variantId
    );

    if (existingItem) {
      existingItem.leftEyeQuantity = variant.leftEyeQuantity;
      existingItem.rightEyeQuantity = variant.rightEyeQuantity;
    } else {
      cart.items.push({
        variantId: variant.variantId,
        leftEyeQuantity: variant.leftEyeQuantity,
        rightEyeQuantity: variant.rightEyeQuantity,
        price: 1500,
      });
    }

    cart.total = cart.items.reduce(
      (acc, item) =>
        acc + item.leftEyeQuantity + item.rightEyeQuantity + item.price,
      0
    );

    appStorage.set(AppStorageKey.MOCK_CART, cart);

    return [200, { data: cart }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

/**
 * Update variant in cart
 * This is a mock implementation. It updates a variant in the cart.
 */
Mock.onPut('/api/cart/variant').reply(async (config: AxiosRequestConfig) => {
  try {
    const cart: MockCart | undefined = appStorage.get(AppStorageKey.MOCK_CART);

    if (!cart?.items.length) return [401, { message: 'Bad Request' }];

    const { params } = JSON.parse(config.data);
    const variant = params;

    const existingItem = cart.items.find(
      (item) => item.variantId === variant.variantId
    );

    if (!existingItem) {
      return [404, { message: 'Not found' }];
    }

    existingItem.leftEyeQuantity += variant.leftEyeQuantity;
    existingItem.rightEyeQuantity += variant.rightEyeQuantity;

    cart.total = cart.items.reduce(
      (acc, item) =>
        acc + item.leftEyeQuantity + item.rightEyeQuantity + item.price,
      0
    );

    appStorage.set(AppStorageKey.MOCK_CART, cart);

    return [200, { data: cart }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

/**
 * Remove variant from cart
 * This is a mock implementation. It removes a variant from the cart.
 */
Mock.onDelete('/api/cart/variant').reply(async (config: AxiosRequestConfig) => {
  try {
    const cart: MockCart | undefined = appStorage.get(AppStorageKey.MOCK_CART);

    if (!cart?.items.length) return [401, { message: 'Bad Request' }];

    const { params } = JSON.parse(config.data);
    const id = params;

    const existingItem = cart.items.find((item) => item.variantId === id);

    if (!existingItem) {
      return [404, { message: 'Not found' }];
    }

    cart?.items.forEach((item, index) => {
      if (item.variantId === id) {
        cart?.items.splice(index, 1);
      }
    });

    cart.total = cart.items.reduce(
      (acc, item) =>
        acc + item.leftEyeQuantity + item.rightEyeQuantity + item.price,
      0
    );

    appStorage.set(AppStorageKey.MOCK_CART, cart);

    return [200, { data: cart }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});
