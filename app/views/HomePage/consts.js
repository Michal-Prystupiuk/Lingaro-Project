import { generatePath } from 'react-router-dom';

import history from 'utils/history';
import { PATHS, HOMEPAGE_TAB_NAMES } from 'consts';

export const HOMEPAGE_TABS = [
  {
    id: HOMEPAGE_TAB_NAMES.TAB_1,
    title: 'tab1-title',
    path: `/homepage/${HOMEPAGE_TAB_NAMES.TAB_1}`,
    onClick: () =>
      history.push(
        generatePath(PATHS.HOMEPAGE_TAB, { tabId: HOMEPAGE_TAB_NAMES.TAB_1 }),
      ),
  },
  {
    id: HOMEPAGE_TAB_NAMES.TAB_2,
    title: 'tab2-title',
    path: `/homepage/${HOMEPAGE_TAB_NAMES.TAB_2}`,
    onClick: () =>
      history.push(
        generatePath(PATHS.HOMEPAGE_TAB, { tabId: HOMEPAGE_TAB_NAMES.TAB_2 }),
      ),
  },
];
