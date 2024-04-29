import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const StyledComponentBannerBar = styled.div`
  background: ${themeGet('colors.secondary.main')};
  color: white;
  height: 40px;
  font-size: 12px;

  .banner-bar-left {
    .logo {
      display: none;
      img {
        display: block;
        height: 36px;
      }
    }
    span {
      margin-left: 10px;
    }
    @media only screen and (max-width: 900px) {
      .logo {
        display: block;
      }
      *:not(.logo) {
        display: none;
      }
    }
  }

  .banner-bar-right {
    .link {
      padding-right: 30px;
      color: white;
    }
    .dropdown-handler {
      cursor: pointer;
      img {
        height: 14px;
        border-radius: 4px;
      }
      span {
        margin-right: 0.25rem;
        margin-left: 0.5rem;
      }
    }
    @media only screen and (max-width: 900px) {
      .link {
        display: none;
      }
    }
  }
`;

export default StyledComponentBannerBar;
