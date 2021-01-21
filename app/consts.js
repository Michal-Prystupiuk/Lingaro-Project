export const HOMEPAGE_TAB_NAMES = {
  TAB_1: 'tab1',
  TAB_2: 'tab2',
};

export const PATHS = {
  HOMEPAGE: '/homepage',
  HOMEPAGE_TAB: `/homepage/:tabId(${Object.values(HOMEPAGE_TAB_NAMES).join(
    '|',
  )})`,
};
