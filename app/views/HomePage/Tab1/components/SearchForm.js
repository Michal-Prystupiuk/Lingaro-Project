import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'formik';
import { Flex } from 'rebass/styled-components';

import { updateSearchText } from 'containers/HomePage/actions';

const AddElementForm = ({
  props: { handleSubmit, handleChange, handleBlur, values },
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // if (values.search) { 
      dispatch(updateSearchText(values.search));
    // }
    console.log(values.search);
  }, [values.search]);

  return (
    <Form onSubmit={handleSubmit}>
      <Flex flexDirection="column" width="100%">
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.search}
          name="search"
        />
      </Flex>
    </Form>
  );
};

export default AddElementForm;
