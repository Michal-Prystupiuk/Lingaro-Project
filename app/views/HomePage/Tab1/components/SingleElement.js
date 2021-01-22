import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'rebass/styled-components';

// other version with icons
// import { XIcon } from 'icons';

import { StyledListElement, StyledListElementButton } from './styledComponents';

/** @type {React.FunctionComponent <{ text: string, onClick: function, index: number }/>} */
const SingleElement = ({ text, onClick, index }) => (
  <StyledListElement>
    <Text fontSize="0.8rem">
      {index + 1}. {text}
    </Text>

    <StyledListElementButton onClick={onClick}> X </StyledListElementButton>
    {/* <XIcon onClick={onClick} style={{ cursor: 'pointer' }} /> */}
  </StyledListElement>
);

SingleElement.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  index: PropTypes.number,
};

export default SingleElement;
