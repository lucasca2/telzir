/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { theme } from 'styles/theme';

declare module 'styled-components' {
  type Theme = typeof theme;
  type ThemeColors = typeof theme.colors;
  type ThemeButtonSizes = typeof theme.button;
  type ThemeFontSizes = typeof theme.font;
  type ThemeSpacing = typeof theme.spacing;

  export type FontSizesScheme = keyof ThemeFontSizes;
  export type ColorScheme = keyof ThemeColors;
  export type ButtonSizesScheme = keyof ThemeButtonSizes;
  export type SpacingScheme = keyof ThemeSpacing;
  export interface DefaultTheme extends Theme {}
}
