import React from 'react';
import { FormattedMessage } from 'react-intl';

import { StyledTab } from './styledComponents';

const SecondTab = () => (
  <StyledTab>
    <FormattedMessage id="homePage.tab2.description" />
  </StyledTab>
);

export default SecondTab;
