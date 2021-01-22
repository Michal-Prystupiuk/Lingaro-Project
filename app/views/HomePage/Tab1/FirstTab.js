import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import {
  addElementToList,
  deleteElementFromList,
} from 'containers/HomePage/actions';
import {
  SortedListSelector,
  SearchTextSelector,
} from 'containers/HomePage/selectors';

import { validateMinLength, validateAlreadyExist } from 'utils';

import { SingleElement } from './components';
import AddElementForm from './components/Column1';
import SearchForm from './components/Column2';
import ToggleButton from './components/Column3';

import { StyledFirstTabContainer, StyledTabRow } from './styledComponents';

const FirstTab = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const elementList = useSelector(SortedListSelector);
  const currentSearchText = useSelector(SearchTextSelector);

  const renderListOfElement = () => {
    let currentList = elementList;

    if (isActive) {
      currentList = elementList.filter((element, index) => index % 2 === 0);
    }

    return currentList.map(({ id, text }, index) => (
      <SingleElement
        key={id}
        text={text}
        onClick={() => {
          dispatch(deleteElementFromList(id));
        }}
        index={index}
      />
    ));
  };

  return (
    <StyledFirstTabContainer>
      <StyledTabRow>
        <Formik
          initialValues={{ elementText: '' }}
          onSubmit={({ elementText }, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            resetForm();
            dispatch(addElementToList(elementText.trim()));
          }}
          validate={({ elementText }) =>
            validateMinLength(elementText) ||
            validateAlreadyExist(elementText, elementList)
          }
        >
          {formikProps => <AddElementForm formikProps={formikProps} />}
        </Formik>

        <Formik
          initialValues={{ searchText: currentSearchText }}
          onSubmit={(value, { resetForm }) => {
            resetForm();
          }}
        >
          {formikProps => <SearchForm formikProps={formikProps} />}
        </Formik>

        <ToggleButton
          onClick={() => setIsActive(!isActive)}
          isActive={isActive}
        />
      </StyledTabRow>

      {renderListOfElement()}
    </StyledFirstTabContainer>
  );
};

export default FirstTab;
