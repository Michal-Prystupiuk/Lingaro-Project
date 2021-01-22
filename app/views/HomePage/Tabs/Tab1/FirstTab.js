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

import {
  ListElement,
  AddElementForm,
  SearchForm,
  ToggleButton,
} from './components';

import { StyledFirstTabContainer, Row } from './styledComponents';

const FirstTab = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const elementList = useSelector(SortedListSelector);
  const currentSearchText = useSelector(SearchTextSelector);

  const renderListOfElement = () =>
    elementList.map((element, index) =>
      isActive && index % 2 === 1 ? (
        undefined
      ) : (
        <ListElement
          key={element.id}
          obj={element}
          onClick={() => {
            dispatch(deleteElementFromList(element.id));
          }}
        />
      ),
    );

  return (
    <StyledFirstTabContainer>
      <Row>
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
      </Row>

      {renderListOfElement()}
    </StyledFirstTabContainer>
  );
};

export default FirstTab;
