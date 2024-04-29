import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const StyledLayoutApp = styled.div`
  .header-container {
    box-shadow: ${themeGet('shadows.regular')};
  }
`;

export default StyledLayoutApp;
