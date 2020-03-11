import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const PRIMARY_MAIN_COLOR = '#FF7B74';
const PRIMARY_CONTRAST_TEXT = '#fff';
const SECONDARY_MAIN_COLOR = '#9e9e9e';
const SECONDARY_CONTRAST_TEXT = '#fafafa';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_MAIN_COLOR,
      contrastText: PRIMARY_CONTRAST_TEXT,
    },
    secondary: {
      main: SECONDARY_MAIN_COLOR,
      contrastText: SECONDARY_CONTRAST_TEXT,
    },
  },
});

export default function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
