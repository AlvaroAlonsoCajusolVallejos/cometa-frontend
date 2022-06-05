import React from 'react';
import Typography from '@mui/material/Typography';

const ClientClock = (): React.ReactElement => {
  const [clock, setTime] = React.useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  );
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const element = (
    <Typography
      variant="h6"
      sx={{ color: 'white', display: 'table-cell', verticalAlign: 'middle' }}
    >
      {clock}
    </Typography>
  );

  return element;
};

export default ClientClock;
