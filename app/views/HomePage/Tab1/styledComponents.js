import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { Row } from 'components';

export const StyledFirstTabContainer = styled(Flex)`
  padding: 20px;
  flex-direction: column;
`;

export const StyledTabRow = styled(Row)`
  grid-template-columns: 3fr 2fr 1fr;

  @media only screen and (max-width: 680px) {
    grid-template-columns: 3fr;
  }
`;
