import React from 'react';
import { Formik, Form } from 'formik';
import { Flex, Button, Text } from 'rebass/styled-components';

import { validateMinLength } from 'utils';

import { Row } from './styledComponents';
import ListElement from './components';

const FirstTab = () => {
  console.log('firsttab');

  const renderListOfElement = () => (
    <ListElement obj={{ id: 1, text: 'hello world' }} />
  );

  return (
    <Flex p="0px 20px 20px" flexDirection="column">
      <Flex flexDirection="row" justifyContent="space-between" width="100%">
        <Formik
          initialValues={{ elementToAdd: '' }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setSubmitting(false);
            resetForm();
          }}
          validate={({ elementToAdd }) => validateMinLength(elementToAdd)}
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
