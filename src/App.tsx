import React from 'react';
import './App.scss';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import Page from './shared/Page/Page';
import Home from './pages/Home/Home';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#2D3185"
    }
  },
  typography: {
    fontFamily: 'Roboto'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Page>
        <Home/>
      </Page>
    </ThemeProvider>
  );
}

export default App;
