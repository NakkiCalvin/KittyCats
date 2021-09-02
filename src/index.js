import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import AppRouter from './router';
import configureStore from './redux/configureStore';
import theme from './theme';

// Should be moved to Components/globalStyle folder
const GlobalStyle = createGlobalStyle`
  html,
    body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    }
  `;

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ReduxProvider store={store}>
      <AppRouter />
    </ReduxProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
