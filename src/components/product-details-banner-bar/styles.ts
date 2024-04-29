import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const StyledComponentBannerBar = styled.div`
  background: ${themeGet("colors.primary.green")};
  color: white;
  height: 43px;
  font-size: 12px;
  .benefit-item{
    font-weight: bold;
  }
  @media (max-width: 640px) {
    .benefit-item {
      div{

        font-size: 9px;
      }
    }
  }
  }
`;

export default StyledComponentBannerBar;
