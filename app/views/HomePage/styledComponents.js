import { Flex, Button } from 'rebass/styled-components';
import styled from 'styled-components';

export const StyledHeader = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
  width: 50%;
  color: black;
  background-color: lightgrey;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }

  &:active {
    background-color: lightgreen;
    border-color: white;
  }

  &:visited {
    border-color: white;
  }

  &:focus {
    border-color: white;
    outline: none;
  }
`;
