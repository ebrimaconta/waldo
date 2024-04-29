import { JSXElementConstructor, ReactElement } from 'react';
import styled from 'styled-components';

type StyledComponentStickyProps = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  ref?: React.MutableRefObject<any>;
  fixed: boolean;
  fixedOn: number;
  componentHeight: number;
  componentPosition: number;
};

const StyledComponentSticky = styled.div<StyledComponentStickyProps>`
  left: 0;
  right: 0;
  z-index: 99;
  transition: all 250ms ease-in-out;
  top: ${(props) => props.fixedOn}px;
  position: ${(props) => (props.fixed ? 'fixed' : 'relative')};

  & + .section-after-sticky {
    padding-top: ${(props) =>
      props.fixed ? `${props.componentHeight}px` : 'inherit'};
  }
`;

export default StyledComponentSticky;
