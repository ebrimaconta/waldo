import styled, { StyledComponent } from "styled-components";

export const ProductDescriptionBox = styled.div<any>`
  h1 {
    font-size: 20px;
    color: "#2B3445";
    margin: 1.5rem;
    margin-left: 0;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    color: #2b3445;
    margin-top: 2rem;
    margin-bottom: 2rem;

    letter-spacing: 0.5px;
    font-weight: 400;
    line-height: 2.1;
  }
  span {
    font-size: 16px;
    color: #b6b6b6;
    margin-top: -0.5rem;
    font-weight: normal;
    display: inline-block;
  }
`;
