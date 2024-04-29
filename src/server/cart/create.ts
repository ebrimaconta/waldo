import axios from 'axios';
import { MockCart } from '@api/db/cart';

import '@api/server';

export type CartCreateResponse = {
  response: MockCart;
  error: string | null;
};

export const cartCreateAxios = async (): Promise<CartCreateResponse> => {
  let error: string | null = null;
  let response: MockCart = null;

  try {
    const result = await axios.post('/api/cart');

    response = result.data.data as MockCart;
  } catch (errorResponse) {
    console.error('API Error', errorResponse);
    error = 'API: Failed to create cart';
  }

  return { response, error };
};
