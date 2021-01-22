import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { updateSearchText } from 'containers/HomePage/actions';

import { SearchIcon } from 'icons';

import {
  StyledSearchForm,
  StyledIcon,
  StyledInputWithIcon,
} from './styledComponents';

/** @type {React.FunctionComponent <{
 * formikProps: {
 * handleSubmit: function,
 * handleChange: function,
 * values: { searchText: string }}}/>} */
const AddElementForm = ({
  formikProps: {
    handleSubmit,
    handleChange,
    handleBlur,
    values: { searchText },
  },
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearchText(searchText.toLowerCase()));
  }, [searchText]);

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <StyledInputWithIcon
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={searchText}
        name="searchText"
      />

      <StyledIcon>
        <SearchIcon />
      </StyledIcon>
    </StyledSearchForm>
  );
};

AddElementForm.propTypes = {
  formikProps: PropTypes.object,
};

export default AddElementForm;
