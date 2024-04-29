import axios from 'axios';
import { MockCart, MockVariant } from '@api/db/cart';

export type VariantAddResponse = {
  response: MockCart;
  error: string | null;
};

export const variantAddAxios = async (
  params: MockVariant
): Promise<VariantAddResponse> => {
  let error: string | null = null;
  let response: MockCart = null;

  try {
    const result = await axios.post('/api/cart/variant', { params });

    response = result.data.data as MockCart;
  } catch (errorResponse) {
    console.error('API Error', errorResponse);
    error = 'API: Failed to add variant';
  }

  return { response, error };
};
