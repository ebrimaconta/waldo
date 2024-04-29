'use client';

import { FC, useState } from 'react';
import Box from '@app/components/box';
import FlexBox from '@app/components/flex-box';
import Grid from '@app/components/grid';
import Image from '@app/components/image';
import Rating from '@app/components/rating';
import { H1, H2, H6, Paragraph } from '@app/components/typography';
import formatCurrency from '@app/utils/format-currency';
import { useBasketEffect } from '@app/hooks/basket';
import ProductQtButtons from '../product-qt-button';
import ProductsSavingBanner from '../products-details-saving-banner';
import Button from '../button';
import ProductImageCarousel from '../product-image-carousel';
import { productDetailsType } from 'types/product';

// ========================================

// ========================================

const ProductIntro: FC<productDetailsType> = ({ images, title, brand, rating, reviews, price, id }) => {
  const { basket } = useBasketEffect();
  const [checked, setChecked] = useState(true);

  const cartItem = basket.cart?.items.find((item) => item.variantId === id);

  return (
    <Box>
      <Grid
        container
        justifyContent='center'
        // spacing={25}
        maxWidth={'100%'}
        mx='auto'
        my='0'
      >
        <Grid item lg={6} xs={12} alignItems='center' px={['1rem', '2rem', '60px']} py={['10px', '65px']}>
          <ProductImageCarousel images={images} />
        </Grid>

        <Grid
          item
          lg={6}
          xs={12}
          alignItems='center'
          pl={['1rem', '2rem', '40px']}
          pr={['1rem', '2rem', '1rem', '1rem', '0px']}
          pt={['0rem', '2rem', '49px']}
          pb={['2rem', '2rem', '49px']}
        >
          <H1 maxWidth={350} color='black' fontSize={['1.5rem', '1.6rem', '1.8rem']}>
            {title}
            <Paragraph
              display={'inline-block'}
              fontSize={14}
              ml={3}
              color='#222222'
              position={'relative'}
              top='-5px'
              fontWeight={600}
            >
              Daily
            </Paragraph>
          </H1>
          <FlexBox alignItems='center' mb='1rem' justifyContent={'space-between'}>
            <FlexBox alignItems='center'>
              <Box mr='8px'>
                <Rating color='warn' value={rating} outof={5} />
              </Box>
              <H6>({reviews})</H6>
            </FlexBox>

            <H2 color='#016C42' mb='4px' lineHeight='1' mr={[0, 0, 0, 0, '-1rem']}>
              {formatCurrency(price)}
            </H2>
          </FlexBox>
          <FlexBox alignItems='center' justifyContent='space-between' maxWidth={360} my='2rem'>
            <ProductQtButtons title='Right Eye' productId={id} {...cartItem} />
            <ProductQtButtons title='Left Eye' productId={id} {...cartItem} />
          </FlexBox>
          <ProductsSavingBanner />
          <Button
            bg='primary.green'
            width={'100%'}
            mb='1rem'
            mt='3rem'
            color='white'
            borderRadius={'5rem'}
            height={'42px'}
          >
            Next: select prescription
          </Button>
          <Box
            mx='auto'
            color='primary.green'
            borderRadius={'5rem'}
            height={'42px'}
            fontWeight={700}
            textAlign={'center'}
          >
            <Image src='/icons/blue-check.svg' mr='6px' /> Use vision insurance
          </Box>

          {/* {!cartItem?.leftEyeQuantity ? (
            <Button
              mb="36px"
              size="small"
              color="primary"
              variant="contained"
              onClick={() => console.log("Add to Cart")}
            >
              Add to Cart
            </Button>
          ) : (
            <FlexBox alignItems="center" mb="36px">
              <Button
                p="9px"
                size="small"
                color="primary"
                variant="outlined"
                onClick={() => console.log("Modify Cart")}
              >
                <Icon variant="small">minus</Icon>
              </Button>

              <H3 fontWeight="600" mx="20px">
                {cartItem?.leftEyeQuantity.toString().padStart(2, "0")}
              </H3>

              <Button
                p="9px"
                size="small"
                color="primary"
                variant="outlined"
                onClick={() => console.log("Modify Cart")}
              >
                <Icon variant="small">plus</Icon>
              </Button>
            </FlexBox>
          )} */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductIntro;
