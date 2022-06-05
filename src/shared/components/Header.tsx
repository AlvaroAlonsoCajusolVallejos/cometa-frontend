import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

import DisplayTemplateContext from '../templates/DisplayNew/contexts/displayTemplate.context';
import ClientClock from './ClientClock';

const Header = (): React.ReactElement => {
  const displayTemplateContext = React.useContext(DisplayTemplateContext);

  return (
    <AppBar
      position="fixed"
      color={process.env.REACT_APP_IS_PRODUCTION === 'true' ? 'primary' : 'secondary'}
    >
      <Toolbar>
        {/* Left area */}
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 2 }}>
          <Typography variant="h6" sx={{ color: 'white' }}>
            {displayTemplateContext.toolbarTitle
              ? displayTemplateContext.toolbarTitle
              : 'COMETA FRONTEND'}
          </Typography>
        </Box>

        {/* Right area */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'end' }}>
          <ClientClock />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
