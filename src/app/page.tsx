'use client';

import React, { useEffect, useState } from 'react';
import ProductIntro from '@app/components/product-intro';
import BannerBar from '@app/components/product-details-banner-bar';
import Box from '@app/components/box';
import FlexBox from '@app/components/flex-box';
import ProductInfoTabs from '@app/components/product-info-tabs';
import BookExamBanner from '@app/components/book-exam-banner';
import axios from 'axios';
import { productDetailsType } from 'types/product';
import { H2 } from '@app/components/typography';

export default function Home() {
  const [productDetails, setProductDetails] = useState<null | productDetailsType>(null);
  useEffect(() => {
    axios
      .get('/api/product/999')
      .then((response) => {
        setProductDetails(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <React.Fragment>
      <BannerBar />
      {productDetails ? (
        <Box maxWidth={'1180px'} mx='auto' mb='4rem'>
          <ProductIntro {...productDetails} />
          <Box mt={['2rem', '3rem', '4rem']}>
            <ProductInfoTabs product={productDetails} />
          </Box>
          <BookExamBanner />
        </Box>
      ) : (
        <FlexBox justifyContent={'center'} margin={'100px'}>
          <H2>Loading...</H2>
        </FlexBox>
      )}
    </React.Fragment>
  );
}
