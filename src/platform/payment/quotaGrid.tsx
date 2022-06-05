import React from 'react';
import Grid from '@mui/material/Grid';
import { StudentOrders } from '../../shared/models/StudentOrders';
import { Card, Checkbox, Paper, Typography } from '@mui/material';

interface QuotaGridProps {
  quotes: StudentOrders[];
  type: number;
}

const QuotaGrid = (props: QuotaGridProps): React.ReactElement => {
  const { quotes, type } = props;

  const date = (date: string): string => {
    const shortDate = new Date(date).toLocaleDateString('en-us', {
      month: 'short',
      day: 'numeric',
    });
    return shortDate.split(' ').reverse().join(' de ');
  };

  return (
    <>
      {quotes &&
        quotes.map((quote, index) => (
          <Grid container spacing={2} key={quote.id} sx={{ mt: 0 }}>
            <Grid item xs={type === 1 ? 8 : 7}>
              {quote.name}
              <Typography sx={{ fontSize: 'small' }}>
                {quote.payin?.created ? 'Pagado' : 'Vence'} el{' '}
                {date(quote.payin?.created ? quote.payin.created : quote.due)}
              </Typography>
            </Grid>
            <Grid item xs={4} textAlign="right">
              {quote.price_currency} {quote.price}
              <Typography sx={{ fontSize: 'small' }}>
                {quote.interest ? `Interés: ${quote.interest}` : ''}
              </Typography>
            </Grid>
            {type !== 1 && (
              <Grid item xs={1} rowGap={2} sx={{ paddingLeft: '0 !important', paddingTop: '0 !important' }}>
                <Checkbox size="medium" disabled={type === 3 && index > 0}/>
              </Grid>
            )}
          </Grid>
        ))}
    </>
  );
};

export default QuotaGrid;
