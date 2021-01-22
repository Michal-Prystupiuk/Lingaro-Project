import { Button } from 'rebass/styled-components';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  color: black;
  background-color: lightgrey;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
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
