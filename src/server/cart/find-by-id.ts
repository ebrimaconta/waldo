import axios from 'axios';
import { MockCart } from '@api/db/cart';

export type CartFindByIdResponse = {
  response: MockCart;
  error: string | null;
};

export const cartFindByIdAxios = async (
  id: number
): Promise<CartFindByIdResponse> => {
  let error: string | null = null;
  let response: MockCart = null;

  try {
    const result = await axios.get(`/api/cart?id=${id}`);

    response = result.data.data as MockCart;
  } catch (errorResponse) {
    console.error('API Error', errorResponse);
    error = 'API: Failed to fetch cart';
  }

  return { response, error };
};
