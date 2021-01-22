import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { Row } from 'components';

export const StyledHomePageContainer = styled(Flex)`
  flex-direction: column;
  text-align: center;
  padding: 20px;
`;

export const StyledHeader = styled(Row)`
  grid-template-columns: 1fr 1fr;
`;
