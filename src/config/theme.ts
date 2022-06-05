import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customComponents: {
      orderSummary: {
        height: number;
      };
    };
  }

  interface ThemeOptions {
    customComponents?: {
      orderSummary?: {
        height?: number;
      };
    };
  }
}

const breakpointsTheme = createTheme();

const theme = createTheme({
  breakpoints: breakpointsTheme.breakpoints,
  palette: {
    mode: 'light',
    primary: {
      main: '#052550',
      light: '#3C81DB',
      dark: '#052550',
    },
    secondary: {
      main: '#1DB3D1',
      light: '#B3EFFF',
      dark: '#052550',
    },
    text: {
      primary: '#232323',
    },
    background: {
      default: '#F3F8FF',
    },
    divider: '#A7A7A7',
    error: { main: '#D32F2F', light: '#F5D7D7' },
    warning: { main: '#ED6C02', light: '#FF9800' },
    success: { main: '#2E7D32', light: '#4CAF50', dark: '#1B5E20' },
    info: { main: '#1DB3D1', light: '#03A9F4' },
  },
  typography: {
    h1: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 300,
      fontSize: '40px',
      lineHeight: '50px',
    },
    h2: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 300,
      fontSize: '34px',
      lineHeight: '40px',
    },
    h3: {
      fontFamily: 'Poppins, Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '30px',
      lineHeight: '36px',
    },
    h4: {
      fontFamily: 'Poppins, Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '28px',
      lineHeight: '32px',
    },
    h5: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '22px',
      lineHeight: '26px',
    },
    h6: {
      fontFamily: 'Poppins, Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '20px',
    },
    body1: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '18px',
    },
    body2: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '16px',
    },
    subtitle1: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 300,
      fontSize: '16px',
      lineHeight: '24px',
    },
    subtitle2: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '16px',
    },
    caption: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '16px',
    },
    overline: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '16px',
    },
  },
  mixins: {
    toolbar: {
      height: 56,
    },
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '46px',
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        item: {
          paddingTop: 12,
        },
      },
    },
  },
  customComponents: {
    orderSummary: {
      height: 62,
    },
  },
});

export default theme;
