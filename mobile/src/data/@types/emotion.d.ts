import theme from 'ui/themes/index';

type PaperThemeType = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends PaperThemeType {}
}
