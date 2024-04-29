'use client';

import styled from 'styled-components';
import Box from '@app/components/box';
import { JSXParentProps } from '@app/definitions';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  GridGapProps,
} from 'styled-system';

type FlexBoxProps = FlexboxProps &
  LayoutProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  GridGapProps &
  FlexProps &
  JSXParentProps;

const FlexBox = styled(Box)<FlexBoxProps>`
  display: flex;
  flex-direction: row;
  ${layout}
  ${color}
  ${flexbox}
  ${space}
  ${border}
`;

export default FlexBox;
