import React from 'react';
import { Flex, Button, Text } from 'rebass/styled-components';

const ListElement = ({ obj, onClick }) => {
  const { id, text } = obj;

  return (
    <Flex
      mt="20px"
      p="20px"
      style={{ border: '1px solid black' }}
      justifyContent="space-between"
    >
      <Text>
        {id + 1}. {text}
      </Text>

      <Button onClick={onClick}> X </Button>
    </Flex>
  );
};

export default ListElement;
