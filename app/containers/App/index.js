/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import createPortalRoutes from 'routers';
import ROUTES from 'routers/Routes';
import GlobalStyle from 'global-styles';

export default function App() {
  return (
    <>
      {createPortalRoutes(ROUTES)}
      <GlobalStyle />
    </>
  );
}
