import React from 'react';
import { PropTypes } from 'prop-types';

import {
  StyledToggleButtonContainer,
  StyledToggleButtonDescription,
  StyledToggleButton,
  StyledCircle,
} from './styledComponents';

/** @type {React.FunctionComponent <{ onClick:  function, isActive: boolean }/>} */
const ToggleButton = ({ onClick, isActive }) => {
  console.log('toggle');

  return (
    <StyledToggleButtonContainer>
      <StyledToggleButtonDescription>
        {isActive ? 'Show all' : 'Hide odd toggle'}
      </StyledToggleButtonDescription>

      <StyledToggleButton onClick={onClick} isActive={isActive}>
        <StyledCircle isActive={isActive} />
      </StyledToggleButton>
    </StyledToggleButtonContainer>
  );
};

ToggleButton.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default ToggleButton;
