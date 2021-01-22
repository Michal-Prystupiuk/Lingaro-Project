import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'rebass/styled-components';

import { StyledListElement, StyledListElementButton } from './styledComponents';

/** @type {React.FunctionComponent <{ obj: {id: number, text: string}, onClick:  function }/>} */
const ListElement = ({ obj: { id, text }, onClick }) => (
  <StyledListElement>
    <Text fontSize="0.8rem">
      {id + 1}. {text}
    </Text>

    <StyledListElementButton onClick={onClick}> X </StyledListElementButton>
  </StyledListElement>
);

ListElement.propTypes = {
  obj: PropTypes.object,
  onClick: PropTypes.func,
};

export default ListElement;
