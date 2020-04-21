import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#BEDFE2',
      main: '#00909B',
      dark: '#05555B',
      contrastText: '#fff',
    },
    secondary: {
      main: '#BEDFE2',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Poppins',
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
      },
      containedSecondary: {
        color: '#05555B',
      },
    },
  },
});

export { theme, MuiThemeProvider };
