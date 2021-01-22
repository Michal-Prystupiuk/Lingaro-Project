import React from 'react';
import { Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import {
  StyledHomePageContainer,
  StyledHeader,
  StyledButton,
} from './styledComponents';

import { HOMEPAGE_TABS } from './consts';
import FirstTab from './Tabs/Tab1';
import SecondTab from './Tabs/Tab2';

const HomePage = () => (
  <StyledHomePageContainer>
    <StyledHeader>
      <StyledButton onClick={HOMEPAGE_TABS[0].onClick}>
        <FormattedMessage id={HOMEPAGE_TABS[0].id} />
      </StyledButton>

      <StyledButton onClick={HOMEPAGE_TABS[1].onClick}>
        <FormattedMessage id={HOMEPAGE_TABS[1].id} />
      </StyledButton>
    </StyledHeader>

    <Route path={HOMEPAGE_TABS[0].path} component={FirstTab} />
    <Route path={HOMEPAGE_TABS[1].path} component={SecondTab} />
  </StyledHomePageContainer>
);

export default HomePage;
