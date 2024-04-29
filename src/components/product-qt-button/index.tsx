import React, { useEffect, useState, useCallback } from 'react';
import FlexBox from '../flex-box';
import Checkbox from '../checkbox';
import { H3, H4, SemiSpan } from '../typography';
import Button from '../button';
import { useBasketEffect } from '@app/hooks/basket';

interface Props {
  title: string;
  productId: number;
  leftEyeQuantity?: number;
  rightEyeQuantity?: number;
}
const ProductQtButtons = ({ title, productId, leftEyeQuantity = 0, rightEyeQuantity = 0 }: Props) => {
  const qt = title === 'Left Eye' ? leftEyeQuantity : rightEyeQuantity;
  let isRightEye = title === 'Right Eye';
  const [checked, setChecked] = useState(qt > 0);
  const { addProduct } = useBasketEffect();

  const handleQuantityChange = useCallback(
    (quantity) => {
      addProduct({
        cartId: 999,
        variantId: productId,
        leftEyeQuantity: isRightEye ? leftEyeQuantity : quantity,
        rightEyeQuantity: isRightEye ? quantity : rightEyeQuantity,
      });
      setChecked(quantity > 0);
    },
    [addProduct, isRightEye, leftEyeQuantity, productId, rightEyeQuantity]
  );

  const onCheck = () => {
    handleQuantityChange(checked ? 0 : 1);
    setChecked(!checked);
  };

  const handleQtChange = (quantity) => {
    if (quantity < 0) return;
    handleQuantityChange(quantity);
  };

  // Default selecting right eye if both eyes are 0
  useEffect(() => {
    if (leftEyeQuantity === 0 && rightEyeQuantity === 0 && isRightEye) {
      handleQuantityChange(1);
    }
  }, []);

  return (
    <FlexBox flexDirection={'column'}>
      <Checkbox
        checked={checked}
        onChange={onCheck}
        label={
          <SemiSpan fontWeight={'bold'} color='#6B6B6B' fontSize={15}>
            {title}
          </SemiSpan>
        }
      />
      <FlexBox alignItems='center' mb='36px' mt='1rem'>
        <Button
          size='small'
          bg='#EBEFF4'
          variant='contained'
          onClick={() => handleQtChange(qt - 1)}
          width={['40px', '50px']}
          height={['40px', '50px']}
          p='0'
          style={{
            fontSize: '1.5rem',
            color: '#2B3445',
            textAlign: 'center',
          }}
        >
          -
        </Button>

        <H3 fontWeight='600' mx='15px' minWidth={'27px'} textAlign={'center'}>
          {qt < 10 && qt > 0 ? `0${qt}` : qt}
        </H3>

        <Button
          // p="1rem"
          size='small'
          bg='#EBEFF4'
          variant='contained'
          onClick={() => handleQtChange(qt + 1)}
          width={['40px', '50px']}
          height={['40px', '50px']}
          p='0'
          style={{
            fontSize: '1.5rem',
            color: '#2B3445',
            textAlign: 'center',
          }}
        >
          +
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

export default ProductQtButtons;
