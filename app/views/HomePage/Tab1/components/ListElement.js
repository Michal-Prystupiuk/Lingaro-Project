import React from 'react';
import { Flex } from 'rebass/styled-components';

const ListElement = ({ obj }) => {
  const { id, text } = obj;

  return (
    <Flex mt="20px" p="20px" style={{ border: '1px solid black' }}>
      {id}.{text}
    </Flex>
  );
};

export default ListElement;
