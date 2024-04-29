import { MockVariant } from '@api/db/cart';
import { useBasketContext } from '@app/contexts/basket';
import { CartCreateResponse, cartCreateAxios } from '@app/server/cart/create';
import {
  variantAddAxios,
  VariantAddResponse,
} from '@app/server/cart/variant-add';

export const useBasketEffect = () => {
  const { basket, basketCreated, basketError, basketLoading, variantAdded } =
    useBasketContext();

  const addVariant = (variant: MockVariant) => {
    variantAddAxios(variant)
      .then(({ response, error }: VariantAddResponse) => {
        if (response) {
          variantAdded(response);
        } else {
          basketError(error);
        }
      })
      .catch((error) => {
        basketError(error);
      });
  };

  const cartCreate = (variant: MockVariant) => {
    cartCreateAxios()
      .then(({ response, error }: CartCreateResponse) => {
        if (response) {
          basketCreated(response);
          addVariant(variant);
        } else {
          basketError(error);
        }
      })
      .catch((error) => {
        basketError(error);
      });
  };

  const addProduct = (product: MockVariant) => {
    basketLoading();

    if (basket.cart) {
      addVariant(product);
    } else {
      cartCreate(product);
    }
  };

  return {
    basket,
    addProduct,
  };
};
