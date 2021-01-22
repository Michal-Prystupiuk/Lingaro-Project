import styled from 'styled-components';
import { Form } from 'formik';
import { Flex, Text, Button } from 'rebass/styled-components';

export const StyledAddElementForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledErrorText = styled(Text)`
  color: red;
  font-size: 0.8rem;
  text-align: left;
  margin-bottom: 5px;
`;

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

  &:disabled {
    background-color: lightgrey;
    color: whitesmoke;
    cursor: not-allowed;
  }

  &:focus {
    border-color: white;
    outline: none;
  }
`;

export const Row = styled.div`
  display: grid;
  align-items: center;
  grid-column-gap: 20px;

  ${(
    /** @type {{ hasError ?: boolean }} */
    { hasError },
  ) => !hasError && 'margin-top: 13.75px;'}

  grid-template-columns: 3fr 1fr;
`;

export const StyledListElement = styled(Flex)`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
`;

export const StyledListElementButton = styled(StyledButton)`
  border-radius: 50%;
`;

export const StyledSearchForm = styled(Form)`
  margin-top: 18.75px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledToggleButtonContainer = styled(Flex)`
  flex-direction: column;
`;

export const StyledToggleButtonDescription = styled(Text)`
  font-size: 0.8rem;
  margin-bottom: 5px;
  text-align: center;
`;

export const StyledToggleButton = styled(Button)`
  position: relative;
  height: 34px;
  cursor: normal;
  ${(
    /** @type {{ isActive ?: boolean }} */
    { isActive },
  ) => `
    background-color: ${isActive ? 'lightgrey' : 'grey'};
    &:hover {
      background-color: ${isActive ? 'grey' : 'lightgrey'};
    }
  `}

  &:focus {
    border-color: white;
    outline: none;
  }
`;

export const StyledCircle = styled(Flex)`
  ${(
    /** @type {{ isActive ?: boolean }} */
    { isActive },
  ) => `left: ${isActive ? 'calc(95% - 32px)' : '5%'};`}
  cursor: pointer;
  position: absolute;
  height: 32px;
  width: 32px;
  top: 1px;
  border: 1px solid black;
  background-color: lightblue;
  margin-left: 0;
  border-radius: 50%;
  transition: 0.5s ease-in-out;
`;
