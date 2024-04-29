import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import FlexBox from "../flex-box";
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  border,
  BorderProps,
} from "styled-system";
type CheckboxInputProps = SpaceProps &
  LayoutProps &
  BorderProps &
  ColorProps &
  InputHTMLAttributes<HTMLInputElement>;

export const CheckboxInput = styled.input<CheckboxInputProps>`
  appearance: none;
  width: 20px;
  height: 20px;
  position: relative;
  border: 1px solid gray;
  border-radius: 2px;
  outline: none;
  margin-right: 10px;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary.green};
    border-color: ${({ theme }) => theme.colors.primary.green};
    color: white;
  }

  &:checked::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  ${border}
  ${space}
  ${layout}
  ${color}
`;
