'use client';

import styled from 'styled-components';
import { JSXParentProps } from '@app/definitions';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  grid
} from 'styled-system';

type BoxProps = LayoutProps &
  ColorProps &
  PositionProps &
  SpaceProps &
  FlexProps &
  BorderProps &
  FlexboxProps &
  JSXParentProps &
  TypographyProps & {
    shadow?: number | null;
    cursor?: string;
    transition?: string;
  };

const Box = styled.div<BoxProps>(
  ({ shadow = 0, cursor = 'unset', transition, theme }) => ({
    cursor,
    transition,
    boxShadow: theme.shadows[shadow as number],
  }),
  compose(layout, space, color, position, flexbox, flex, border, typography,grid)
);

export default Box;
