import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface ResumeCardProps {
  total: number;
  studentName: string;
  grade: string;
  currency: string;
}

const ResumeCard = (props: ResumeCardProps): React.ReactElement => {
  const { total, studentName, grade, currency } = props;

  return (
    <Card sx={{ mt: '1rem' }}>
      <CardContent sx={{ verticalAlign: 'top', height: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {studentName}
          </Grid>
          <Grid item xs={6} textAlign="right">
            {grade}
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Total a Pagar</Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Typography variant="h6">
              {currency} {total}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ResumeCard;
