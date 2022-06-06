import React from 'react';
import Grid from '@mui/material/Grid';
import { StudentOrders } from '../../shared/models/StudentOrders';
import { Checkbox, Typography } from '@mui/material';

interface QuotaGridProps {
  studentOrders: StudentOrders[];
  quotes: StudentOrders[];
  quotesForPaid: any;
  setQuotesForPaid: (quotesForPaid: any) => void;
  type: number;
}

const QuotaGrid = (props: QuotaGridProps): React.ReactElement => {
  const { studentOrders, quotes, quotesForPaid, setQuotesForPaid, type } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const quotesForPaidTemp = { ...quotesForPaid };
    quotesForPaidTemp[event.target.defaultValue] = event.target.checked;
    setQuotesForPaid(quotesForPaidTemp);
  };

  const date = (date: string): string => {
    const shortDate = new Date(date).toLocaleDateString('en-us', {
      month: 'short',
      day: 'numeric',
    });
    return shortDate.split(' ').reverse().join(' de ');
  };

  const getIndex = (quote: StudentOrders): number =>
    studentOrders.findIndex((order) => quote.id === order.id);

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
              <Grid
                item
                xs={1}
                rowGap={2}
                sx={{ paddingLeft: '0 !important', paddingTop: '0 !important' }}
              >
                <Checkbox
                  value={getIndex(quote)}
                  onChange={handleChange}
                  size="medium"
                  checked={quotesForPaid[getIndex(quote)]}
                  disabled={!((type === 2 && index === 0) || quotesForPaid[getIndex(quote) - 1])}
                />
              </Grid>
            )}
          </Grid>
        ))}
    </>
  );
};

export default QuotaGrid;
