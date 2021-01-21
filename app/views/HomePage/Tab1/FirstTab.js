import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Flex, Button, Text } from 'rebass/styled-components';

import {
  addElementToList,
  deleteElementFromList,
} from 'containers/HomePage/actions';
import { ListSelector } from 'containers/HomePage/selectors';

import { validateMinLength, validateAlreadyExist } from 'utils';

import { Row } from './styledComponents';
import ListElement from './components';

const FirstTab = () => {
  console.log('firsttab');
  const dispatch = useDispatch();

  const data = useSelector(ListSelector);

  const renderListOfElement = () =>
    data.map(element => (
      <ListElement
        obj={element}
        key={element.id}
        onClick={() => {
          dispatch(deleteElementFromList(element.id));
        }}
      />
    ));

  return (
    <Flex p="0px 20px 20px" flexDirection="column">
      <Flex flexDirection="row" justifyContent="space-between" width="100%">
        <Formik
          initialValues={{ elementToAdd: '' }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setSubmitting(false);
            resetForm();
            dispatch(addElementToList(values.elementToAdd));
          }}
          validate={({ elementToAdd }) =>
            validateMinLength(elementToAdd) ||
            validateAlreadyExist(elementToAdd, data)
          }
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            isSubmitting,
            isValid,
            dirty,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Flex flexDirection="column" width="100%">
                <Text color="red" fontSize="0.8rem" textAlign="left" mb="5px">
                  {errors[0]}
                </Text>

                <Row mt={errors.length > 0 ? undefined : '13.75px'}>
                  <input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.elementToAdd}
                    name="elementToAdd"
                  />

                  <button
                    type="submit"
                    disabled={!isValid || !dirty || isSubmitting}
                  >
                    Add
                  </button>
                </Row>
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>

      {renderListOfElement()}
    </Flex>
  );
};

export default FirstTab;
