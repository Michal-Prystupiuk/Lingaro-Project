import styled from 'styled-components';
import { space } from 'styled-system';

export const Row = styled.div`
  ${space}
  display: grid;
  align-items: center;
  grid-column-gap: 20px;

  grid-template-columns: 2fr 1fr;
`;
