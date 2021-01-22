import React from 'react';
import { Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Flex } from 'rebass/styled-components';

import { StyledHeader, StyledButton } from './styledComponents';

import { HOMEPAGE_TABS } from './consts';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const HomePage = () => (
  <Flex flexDirection="column" textAlign="center" p="20px">
    <StyledHeader>
      <StyledButton onClick={HOMEPAGE_TABS[0].onClick}>
        <FormattedMessage id="homePage.tab1.title" />
      </StyledButton>

      <StyledButton onClick={HOMEPAGE_TABS[1].onClick}>
        <FormattedMessage id="homePage.tab2.title" />
      </StyledButton>
    </StyledHeader>

    <Route path={HOMEPAGE_TABS[0].path} component={Tab1} />
    <Route path={HOMEPAGE_TABS[1].path} component={Tab2} />
  </Flex>
);

export default HomePage;
