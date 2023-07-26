import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f9bd38',
      light: 'rgb(243, 179, 51)',
      dark: 'rgb(168, 112, 0)',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    secondary: {
      main: '#313131',
    },
    info: {
      main: '#f9bd38',
      contrastText: 'rgba(255,255,255,0.87)',
    },
  },
});
