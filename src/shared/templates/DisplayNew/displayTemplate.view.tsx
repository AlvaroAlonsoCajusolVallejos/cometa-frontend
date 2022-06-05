import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';
import Header from '../../components/Header';

interface DisplayTemplateViewProps {
  children: React.ReactNode;
}

const DisplayTemplateView = (props: DisplayTemplateViewProps): React.ReactElement => {
  const { children } = props;

  return (
    <Box
      sx={{
        minWidth: '100%',
        minHeight: '100vh',
        pt: ({ mixins }) => `${mixins.toolbar.height}px`,
      }}
    >

      <Header />

      <React.Suspense
        fallback={
          <Skeleton
            variant="rectangular"
            height={4}
            sx={{ bgcolor: 'white', position: 'fixed', top: 0, width: '100%' }}
          />
        }
      >
        <Box component="main" sx={{ display: 'flex', flexGrow: 1, minHeight: '100%' }}>
          {children}
        </Box>
      </React.Suspense>
    </Box>
  );
};

export default DisplayTemplateView;
