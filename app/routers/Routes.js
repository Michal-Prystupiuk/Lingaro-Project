import { PATHS } from 'consts';
import HomePage from 'views/HomePage/Loadable';
import NotFoundPage from 'views/NotFoundPage/Loadable';

const ROUTES = [
  {
    path: PATHS.HOMEPAGE,
    component: HomePage,
  },
  {
    path: PATHS.HOMEPAGE_TAB,
    component: HomePage,
  },
  {
    component: NotFoundPage,
    key: 'not-found-page',
    exact: false,
  },
];

export default ROUTES;
