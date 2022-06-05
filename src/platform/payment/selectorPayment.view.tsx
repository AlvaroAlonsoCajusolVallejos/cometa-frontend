import { Fab } from '@mui/material';
import Container from '@mui/material/Container';
import { StudentInfo } from '../../shared/models/StudentInfo';
import { StudentOrders } from '../../shared/models/StudentOrders';
import QuotaSection from './quotaSection';
import ResumeCard from './resumeCard';

interface SelectorPaymentViewProps {
  studentOrders: StudentOrders[];
  student: StudentInfo;
}

const SelectorPaymentView = (props: SelectorPaymentViewProps): React.ReactElement => {
  const { studentOrders, student } = props;

  const totalToPay = (studentOrders: StudentOrders[]): number => {
    let total: number = 0.0;
    studentOrders.forEach((order) => {
      total += parseFloat(order.price);
    });
    return total;
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
      <QuotaSection studentOrders={studentOrders} />
      <Fab
        variant="extended"
        sx={{ position: 'fixed', bottom: 15, color: 'white', width: '92%' }}
        color={process.env.REACT_APP_IS_PRODUCTION === 'true' ? 'primary' : 'secondary'}
      >
        Navigate
      </Fab>
    </Container>
  );
};

export default SelectorPaymentView;
