import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import AppRoutes from './routes';
import Theme from './config/theme';

const App = (): React.ReactElement => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
};
export default App;
