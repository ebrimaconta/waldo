import { MockCart } from '@api/db/cart';

export interface BasketDataState {
  loading: boolean;
  basketOpen: boolean;
  basketConverted: boolean;
  customerAssigned: boolean;
  countItems: number;
  countProductVariants: number;
  includesLenses: boolean;
  includesBothEyes: boolean;
  includesDuplicateEyes: boolean;
  includesDoctor: boolean;
  includesPrescription: boolean;
  includesTax: boolean;

  cart?: MockCart;
  secret?: string;
  token?: any;
  error?: string;
}

export const cleanBasketDataState: BasketDataState = {
  loading: false,
  basketOpen: false,
  basketConverted: false,
  customerAssigned: false,
  countItems: 0,
  countProductVariants: 0,
  includesLenses: false,
  includesBothEyes: false,
  includesDuplicateEyes: false,
  includesDoctor: false,
  includesPrescription: false,
  includesTax: false,
};
