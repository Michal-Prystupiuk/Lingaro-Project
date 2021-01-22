import { Form } from 'formik';
import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';
import { StyledInput } from '../styledComponents';

export const StyledSearchForm = styled(Form)`
  position: relative;
  margin-top: 18.75px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledIcon = styled(Flex)`
  position: absolute;
  left: calc(100% - 20px);
`;

export const StyledInputWithIcon = styled(StyledInput)`
  padding-right: 25px;
`;
