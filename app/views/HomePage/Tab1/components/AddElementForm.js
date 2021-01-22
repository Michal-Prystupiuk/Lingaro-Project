import React from 'react';
import { Form } from 'formik';
import { Flex, Text } from 'rebass/styled-components';
import { Row } from '../styledComponents';

const AddElementForm = ({
  props: {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
    isValid,
    dirty,
  },
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

        <button type="submit" disabled={!isValid || !dirty || isSubmitting}>
          Add
        </button>
      </Row>
    </Flex>
  </Form>
);

export default AddElementForm;
