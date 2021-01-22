import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { StyledButton } from 'components';

import { StyledInput } from '../styledComponents';

import {
  StyledFormContainer,
  StyledErrorText,
  StyledFormRow,
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
  <StyledFormContainer onSubmit={handleSubmit}>
    <StyledErrorText>{errors[0]}</StyledErrorText>

    <StyledFormRow hasError={errors.length > 0}>
      <StyledInput
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={elementText}
        name="elementText"
      />

      <StyledButton type="submit" disabled={!isValid || !dirty || isSubmitting}>
        <FormattedMessage id="homePage.tab1.button.title" />
      </StyledButton>
    </StyledFormRow>
  </StyledFormContainer>
);

AddElementForm.propTypes = {
  formikProps: PropTypes.object,
};

export default AddElementForm;
