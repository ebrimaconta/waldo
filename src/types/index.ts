import { JSXElementConstructor, ReactElement, ReactNode } from 'react';

export const DEVICE_SIZE = {
  xs: 425,
  sm: 768,
  md: 1024,
  lg: 1440,
};

export const LAYOUT_CONFIG = {
  headerHeight: '80px',
  mobileNavHeight: '64px',
  containerWidth: '1200px',
  mobileHeaderHeight: '64px',
  grocerySidenavWidth: '280px',
};

export type ColorOptions =
  | 'primary'
  | 'secondary'
  | 'warn'
  | 'error'
  | 'inherit'
  | 'dark';

export type JSXElementProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.MutableRefObject<any>;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

export type JSXParentProps = JSXElementProps & {
  children: ReactElement<any, string | JSXElementConstructor<any>> | ReactNode;
};

export type LayoutProps = {
  children: ReactNode;
};
