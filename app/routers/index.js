import React from 'react';
import { Route, Switch } from 'react-router-dom';

const createPortalRouter = (routes = []) => (
  <Switch>
    {routes.map(route => (
      <Route key={route.path || route.key} exact {...route} />
    ))}
  </Switch>
);

export default createPortalRouter;
