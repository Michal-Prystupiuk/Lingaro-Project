import React from 'react';
import { FormattedMessage } from 'react-intl';

import { StyledBody } from './styledComponents';

const NotFoundPage = () => (
  <StyledBody>
    <FormattedMessage id="notFoundPage.title" />

    <FormattedMessage
      id="notFoundPage.redirect.title"
      values={{
        link: (
          <a href="http://localhost:3000/homepage">
            <FormattedMessage id="notFoundPage.redirect.link" />
          </a>
        ),
      }}
    />
  </StyledBody>
);

export default NotFoundPage;
