import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';
import { StyledButton } from 'components';

export const StyledInput = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  height: 34px;

  &:focus {
    background-color: aliceblue;
    outline: none;
  }
`;

export const StyledListElement = styled(Flex)`
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: lightgrey;
`;

export const StyledListElementButton = styled(StyledButton)`
  background-color: white;
  padding: 10px 15px;
  border-radius: 50%;
`;
