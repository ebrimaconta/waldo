'use client';

import { JSXParentProps, LAYOUT_CONFIG } from '@app/definitions';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

const Container = styled.div<
  LayoutProps &
    ColorProps &
    PositionProps &
    SpaceProps &
    FlexboxProps &
    JSXParentProps
>`
  margin-left: auto;
  margin-right: auto;
  max-width: ${LAYOUT_CONFIG.containerWidth};

  @media only screen and (max-width: 1199px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  ${color}
  ${position}
  ${flexbox}
  ${layout}
  ${space}
`;

export default Container;
