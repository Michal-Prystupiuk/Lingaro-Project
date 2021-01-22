import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  StyledContainer,
  StyledButtonDescription,
  StyledToggleButton,
  StyledCircle,
} from './styledComponents';

/** @type {React.FunctionComponent <{ onClick:  function, isActive: boolean }/>} */
const ToggleButton = ({ onClick, isActive }) => (
  <StyledContainer>
    <StyledButtonDescription>
      <FormattedMessage
        id={`homePage.tab1.toggle.button.${isActive ? 'show' : 'hide'}`}
      />
    </StyledButtonDescription>

    <StyledToggleButton onClick={onClick} isActive={isActive}>
      <StyledCircle isActive={isActive} />
    </StyledToggleButton>
  </StyledContainer>
);

ToggleButton.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default ToggleButton;
