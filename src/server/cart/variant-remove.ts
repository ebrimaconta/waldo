import axios from 'axios';
import { MockCart, MockVariant } from '@api/db/cart';

export type VariantRemoveResponse = {
  response: MockCart;
  error: string | null;
};

export const variantRemoveAxios = async (
  id: number
): Promise<VariantRemoveResponse> => {
  let error: string | null = null;
  let response: MockCart = null;

  try {
    const result = await axios.delete('/api/cart/variant', { params: { id } });

    response = result.data.data as MockCart;
  } catch (errorResponse) {
    console.error('API Error', errorResponse);
    error = 'API: Failed to remove variant';
  }

  return { response, error };
};
