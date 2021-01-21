import React from 'react';
import { Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Flex, Button } from 'rebass/styled-components';

import { HOMEPAGE_TABS } from './consts';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const HomePage = () => {
  // console.log(querystring);

  // const { tabId } = useParams();

  return (
    <Flex flexDirection="column" textAlign="center" p="20px">
      <Flex flexDirection="row" justifyContent="space-between">
        <Button onClick={HOMEPAGE_TABS[0].onClick} width="50%">
          <FormattedMessage id="homePage.tab1.title" />
        </Button>

        <Button onClick={HOMEPAGE_TABS[1].onClick} width="50%">
          <FormattedMessage id="homePage.tab2.title" />
        </Button>
      </Flex>

      <Route path={HOMEPAGE_TABS[0].path} component={Tab1} />
      <Route path={HOMEPAGE_TABS[1].path} component={Tab2} />
    </Flex>
  );
};

export default HomePage;
