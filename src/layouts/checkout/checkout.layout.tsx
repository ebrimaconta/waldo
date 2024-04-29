'use client';

import { FC, ReactNode } from 'react';
import AppLayout from '@app/layouts/app';
import Container from '@app/components/container';

// ======================================================
type Props = { children: ReactNode };
// ======================================================

const CheckoutLayout: FC<Props> = ({ children }) => {
  return (
    <AppLayout>
      <Container my='2rem'>{children}</Container>
    </AppLayout>
  );
};

export default CheckoutLayout;
