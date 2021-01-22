import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Flex, Button } from 'rebass/styled-components';

import {
  addElementToList,
  deleteElementFromList,
} from 'containers/HomePage/actions';
import {
  SortedListSelector,
  SearchTextSelector,
} from 'containers/HomePage/selectors';

import { validateMinLength, validateAlreadyExist } from 'utils';

import { ListElement, AddElementForm, SearchForm } from './components';

const FirstTab = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const data = useSelector(SortedListSelector);
  const currentSearchText = useSelector(SearchTextSelector);

  const renderListOfElement = () =>
    data.map((element, index) =>
      isActive && index % 2 === 1 ? (
        undefined
      ) : (
        <ListElement
          obj={element}
          key={element.id}
          onClick={() => {
            dispatch(deleteElementFromList(element.id));
          }}
        />
      ),
    );

  return (
    <Flex p="0px 20px 20px" flexDirection="column">
      <Flex flexDirection="row" justifyContent="space-between" width="100%">
        <Formik
          initialValues={{ elementToAdd: '' }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            resetForm();
            dispatch(addElementToList(values.elementToAdd.trim()));
          }}
          validate={({ elementToAdd }) =>
            validateMinLength(elementToAdd) ||
            validateAlreadyExist(elementToAdd, data)
          }
        >
          {props => <AddElementForm props={props} />}
        </Formik>

        <Formik
          initialValues={{ search: currentSearchText }}
          onSubmit={(value, { resetForm }) => {
            resetForm();
          }}
        >
          {props => <SearchForm props={props} />}
        </Formik>

        <Button onClick={() => setIsActive(!isActive)}>toggle</Button>
      </Flex>

      {renderListOfElement()}
    </Flex>
  );
};

export default FirstTab;
