import { DEVICE_SIZE } from '@app/definitions';
import colors from './colors.theme';
import shadows from './shadows.theme';

const breakpoints: any = Object.keys(DEVICE_SIZE).map(
  (key) => DEVICE_SIZE[key] + 'px'
);

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const THEMES = {
  DEFAULT: 'DEFAULT',
};

const themesOptions = {
  [THEMES.DEFAULT]: { colors, shadows, breakpoints },
};

const getThemeOptions = (publicRuntimeConfig: any, pathname: string) => {
  let themeOption: any;

  const updateTheme = (themeName: string) => {
    publicRuntimeConfig.theme = themeName;
    themeOption = themesOptions[publicRuntimeConfig.theme];
  };

  switch (pathname) {
    case '/':
      updateTheme(THEMES.DEFAULT);
      break;

    default:
      themeOption = themesOptions[THEMES.DEFAULT];
      break;
  }

  return themeOption;
};

export default getThemeOptions;
