import styled from "styled-components";
import { JSXElementProps } from "@app/definitions";
import {
  border,
  BorderProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";

const Image = styled.img<
  SpaceProps &
    BorderProps &
    LayoutProps &
    JSXElementProps & {
      src: string;
      alt?: string;
    }
>`
  ${space}
  ${border}
  ${layout}
`;

export default Image;
