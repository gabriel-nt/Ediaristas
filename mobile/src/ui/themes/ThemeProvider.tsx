import React from 'react';
import theme from './index';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider as EmotionProvider } from '@emotion/react';

interface ThemeProviderProps {
  children: React.ReactChildren;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <EmotionProvider theme={theme}>
    <PaperProvider theme={theme}>{children}</PaperProvider>
  </EmotionProvider>
);

export default ThemeProvider;
