import React from 'react';
import { Fab } from '@mui/material';
import Container from '@mui/material/Container';
import SweetAlert from 'react-bootstrap-sweetalert';
import { StudentInfo } from '../../shared/models/StudentInfo';
import { Payin, StudentOrders } from '../../shared/models/StudentOrders';
import QuotaSection from './quotaSection';
import ResumeCard from './resumeCard';
import { StudentOrdersState } from '../../shared/hooks/studentOrders.hook';

interface SelectorPaymentViewProps {
  studentOrders: StudentOrders[];
  student: StudentInfo;
  setSelectedStudentOrders: (studentOrdersState: StudentOrdersState) => void;
}

const SelectorPaymentView = (props: SelectorPaymentViewProps): React.ReactElement => {
  const { studentOrders, student, setSelectedStudentOrders } = props;
  const [open, setOpen] = React.useState(false);
  const [quotesForPaid, setQuotesForPaid] = React.useState(Object);

  const totalToPay = (studentOrders: StudentOrders[]): number => {
    let total: number = 0.0;
    studentOrders.forEach((order) => {
      total += parseFloat(order.price);
    });
    return total;
  };

  const generateId = (): string => {
    const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    const oid =
      timestamp +
      'xxxxxxxxxxxxxxxx'
        .replace(/[x]/g, (_) => ((Math.random() * 16) | 0).toString(16))
        .toLowerCase();
    return oid;
  };

  const onclick = () => {
    setOpen(true);
  };

  const onConfirm = () => {
    if (Object.keys(quotesForPaid).length) {
      Object.keys(quotesForPaid).forEach((index) => {
        if (quotesForPaid[index]) {
          const payin: Payin = {
            id: generateId(),
            status: 'approved',
            created: new Date().toISOString(),
          };
          studentOrders[parseInt(index)]['payin'] = payin;
          studentOrders[parseInt(index)]['status'] = 'PAID';
        }
      });
      setSelectedStudentOrders({ data: studentOrders, isLoading: true });
      localStorage.setItem(
        'selectedStudentOrders',
        JSON.stringify({ data: studentOrders, isLoading: true }),
      );
      setQuotesForPaid({});
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: '100%',
        pb: 2,
      }}
    >
      <ResumeCard
        total={totalToPay(studentOrders)}
        studentName={student.first_name + ' ' + student.last_name}
        grade={student.cohort}
        currency={studentOrders.length ? studentOrders[0].price_currency : ''}
      />
      <QuotaSection
        studentOrders={studentOrders}
        quotesForPaid={quotesForPaid}
        setQuotesForPaid={setQuotesForPaid}
      />
      <Fab
        variant="extended"
        sx={{ position: 'fixed', bottom: 15, color: 'white', width: '92%' }}
        color={process.env.REACT_APP_IS_PRODUCTION === 'true' ? 'primary' : 'secondary'}
        onClick={() => onclick()}
      >
        IR A PAGAR
      </Fab>
      <SweetAlert
        title={'Pagar cuotas seleccionadas'}
        onConfirm={() => {
          setOpen(false);
          onConfirm();
        }}
        onCancel={() => {
          setOpen(false);
        }}
        showCancel={true}
        show={open}
      ></SweetAlert>
    </Container>
  );
};

export default SelectorPaymentView;
