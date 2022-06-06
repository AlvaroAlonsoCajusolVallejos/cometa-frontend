import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StudentOrders } from '../../shared/models/StudentOrders';
import QuotaGrid from './quotaGrid';

interface QuotaSectionProps {
  studentOrders: StudentOrders[];
  quotesForPaid: any;
  setQuotesForPaid: (quotesForPaid: any) => void;
}

const QuotaSection = (props: QuotaSectionProps): React.ReactElement => {
  const { studentOrders, quotesForPaid, setQuotesForPaid } = props;

  const quotesPaid = studentOrders.filter((quote) => quote.status === 'PAID');
  const quotesPending = studentOrders.filter((quote) => quote.status === 'DUE');
  const quotesFuture = studentOrders.filter((quote) => quote.status === 'OUTSTANDING');

  return (
    <>
      <Card sx={{ mt: '1rem' }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
            <Typography sx={{ fontWeight: 'bold' }}>Cuotas Pagadas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <QuotaGrid
              studentOrders={studentOrders}
              quotes={quotesPaid}
              quotesForPaid={quotesForPaid}
              setQuotesForPaid={setQuotesForPaid}
              type={1}
            />
          </AccordionDetails>
        </Accordion>
      </Card>
      <Card sx={{ mt: '1rem' }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
            <Typography sx={{ fontWeight: 'bold' }}>Cuotas Pendientes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <QuotaGrid
              studentOrders={studentOrders}
              quotes={quotesPending}
              quotesForPaid={quotesForPaid}
              setQuotesForPaid={setQuotesForPaid}
              type={2}
            />
          </AccordionDetails>
        </Accordion>
      </Card>
      <Card sx={{ mt: '1rem' }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
            <Typography sx={{ fontWeight: 'bold' }}>Cuotas Futuras</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <QuotaGrid
              studentOrders={studentOrders}
              quotes={quotesFuture}
              quotesForPaid={quotesForPaid}
              setQuotesForPaid={setQuotesForPaid}
              type={3}
            />
          </AccordionDetails>
        </Accordion>
      </Card>
    </>
  );
};

export default QuotaSection;
