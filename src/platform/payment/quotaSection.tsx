import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StudentOrders } from '../../shared/models/StudentOrders';
import QuotaGrid from './quotaGrid';

interface QuotaSectionProps {
  studentOrders: StudentOrders[];
}

const QuotaSection = (props: QuotaSectionProps): React.ReactElement => {
  const { studentOrders } = props;

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
            <QuotaGrid quotes={quotesPaid} type={1} />
          </AccordionDetails>
        </Accordion>
      </Card>
      <Card sx={{ mt: '1rem' }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
            <Typography sx={{ fontWeight: 'bold' }}>Cuotas Pendientes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <QuotaGrid quotes={quotesPending} type={2} />
          </AccordionDetails>
        </Accordion>
      </Card>
      <Card sx={{ mt: '1rem' }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
            <Typography sx={{ fontWeight: 'bold' }}>Cuotas Futuras</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <QuotaGrid quotes={quotesFuture} type={3} />
          </AccordionDetails>
        </Accordion>
      </Card>
    </>
  );
};

export default QuotaSection;
