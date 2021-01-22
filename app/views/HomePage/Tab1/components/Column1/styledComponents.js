import styled from 'styled-components';
import { Form } from 'formik';
import { Text } from 'rebass/styled-components';
import { Row } from 'components';

export const StyledFormContainer = styled(Form)`
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

export const StyledFormRow = styled(Row)`
  grid-template-columns: 3fr 1fr;

  ${(
    /** @type {{ hasError ?: boolean }} */
    { hasError },
  ) => !hasError && 'margin-top: 13.75px;'}
`;
