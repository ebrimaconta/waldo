'use client';

import { FC, ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import BannerBar from '@app/components/banner-bar';
import Sticky from '@app/components/sticky';
import StyledLayoutApp from './styles';

// ===============================================================================
type Props = { title?: string; navbar?: ReactElement; children: ReactNode };
// ===============================================================================

const AppLayout: FC<Props> = ({
  navbar,
  children,
  title = 'React Next.js Ecommerce Template',
}) => (
  <StyledLayoutApp>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <Sticky fixedOn={0}>
      <>
        <BannerBar />
        {navbar ? <div className='section-after-sticky'>{navbar}</div> : null}
      </>
    </Sticky>

    {!navbar ? (
      <div className='section-after-sticky'>{children}</div>
    ) : (
      children
    )}
  </StyledLayoutApp>
);

export default AppLayout;
