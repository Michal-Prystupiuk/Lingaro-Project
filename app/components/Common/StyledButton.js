import { Button } from 'rebass/styled-components';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
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
    background-color: lightblue;
    outline: none;
  }

  &:disabled {
    background-color: lightgrey;
    color: whitesmoke;
    cursor: not-allowed;
  }
`;
