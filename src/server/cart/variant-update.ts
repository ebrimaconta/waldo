import axios from 'axios';
import { MockCart, MockVariant } from '@api/db/cart';

export type VariantUpdateResponse = {
  response: MockCart;
  error: string | null;
};

export const variantUpdateAxios = async (
  params: MockVariant
): Promise<VariantUpdateResponse> => {
  let error: string | null = null;
  let response: MockCart = null;

  try {
    const result = await axios.put('/api/cart/variant', { params });

    response = result.data.data as MockCart;
  } catch (errorResponse) {
    console.error('API Error', errorResponse);
    error = 'API: Failed to update variant';
  }

  return { response, error };
};
