import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import GlobalStyles from '../src/styles/global-styles';

/* TODO: update import for your custom theme configurations */
import { theme } from '../src/styles/theme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
        values: [
          { name: 'Dark', value: theme.colors.primaryColor },
          { name: 'Light', value: theme.colors.white },
        ],
        default: 'Light',
    },
  },

  decorators: [withThemeFromJSXProvider({
    themes: {
      light: theme,
      dark: theme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
    })]
};

export default preview;