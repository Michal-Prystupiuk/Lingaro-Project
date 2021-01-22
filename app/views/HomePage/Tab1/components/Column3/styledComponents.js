import styled from 'styled-components';
import { Flex, Text, Button } from 'rebass/styled-components';

export const StyledContainer = styled(Flex)`
  flex-direction: column;
`;

export const StyledButtonDescription = styled(Text)`
  font-size: 0.8rem;
  margin-bottom: 5px;
  text-align: center;
`;

export const StyledToggleButton = styled(Button)`
  position: relative;
  height: 34px;
  cursor: normal;
  background-color: lightgrey;

  &:focus {
    border-color: white;
    outline: none;
  }
`;

export const StyledCircle = styled(Flex)`
  cursor: pointer;
  position: absolute;
  height: 32px;
  width: 32px;
  top: 1px;
  border: 1px solid lightcyan;
  background-color: lightblue;
  margin-left: 0;
  border-radius: 50%;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: CornflowerBlue;
  }

  ${(
    /** @type {{ isActive ?: boolean }} */
    { isActive },
  ) => `left: ${isActive ? 'calc(95% - 32px)' : '5%'};`}
`;
