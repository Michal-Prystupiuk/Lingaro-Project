import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  StyledAddElementForm,
  StyledErrorText,
  StyledButton,
  Row,
} from './styledComponents';

/** @type {React.FunctionComponent <{
 * formikProps: {
 * handleSubmit: function,
 * handleChange: function,
 * handleBlur:  function,
 * values: { elementText: string }
 * errors?: array,
 * isSubmitting: boolean,
 * isValid: boolean,
 * dirty: boolean }}/>} */
const AddElementForm = ({
  formikProps: {
    handleSubmit,
    handleChange,
    handleBlur,
    values: { elementText },
    errors,
    isSubmitting,
    isValid,
    dirty,
  },
}) => (
  <StyledAddElementForm onSubmit={handleSubmit}>
    <StyledErrorText>{errors[0]}</StyledErrorText>

    <Row hasError={errors.length > 0}>
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={elementText}
        name="elementText"
      />

      <StyledButton type="submit" disabled={!isValid || !dirty || isSubmitting}>
        <FormattedMessage id="homePage.tab1.button.title" />
      </StyledButton>
    </Row>
  </StyledAddElementForm>
);

AddElementForm.propTypes = {
  formikProps: PropTypes.object,
};

export default AddElementForm;
