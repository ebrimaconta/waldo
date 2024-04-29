'use client';

import theme from '@app/theme/index';
import GlobalStyles from '@app/theme/globals.theme';
import { ThemeProvider } from 'styled-components';
import { LayoutProps } from '@app/definitions';

const StyledContext = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StyledContext;
