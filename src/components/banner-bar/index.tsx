'use client';
import { FC } from 'react';
import Container from '@app/components/container';
import FlexBox from '@app/components/flex-box';
import StyledComponentBannerBar from './styles';

const BannerBar: FC = () => {
  return (
    <StyledComponentBannerBar>
      <Container
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        height='100%'
      >
        <FlexBox className='banner-bar-left'>
          <FlexBox alignItems='center'>
            <span>Banner Bar</span>
          </FlexBox>
        </FlexBox>
      </Container>
    </StyledComponentBannerBar>
  );
};

export default BannerBar;
