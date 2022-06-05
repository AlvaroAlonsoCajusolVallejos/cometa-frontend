import React from 'react';
import useStudentOrders from '../../shared/hooks/studentOrders.hook';
import { StudentInfo } from '../../shared/models/StudentInfo';
import DisplayTemplateContext from '../../shared/templates/DisplayNew/contexts/displayTemplate.context';
import SelectorPaymentViewProps from './selectorPayment.view';

const SelectorPaymentContainer = (): React.ReactElement => {
  const studentOrders = useStudentOrders();
  const { setToolbarTitle } = React.useContext(DisplayTemplateContext);
  const student: StudentInfo = JSON.parse(localStorage.getItem('selectedStudent')!);

  if (student && setToolbarTitle) setToolbarTitle(student.school.name);

  return <SelectorPaymentViewProps student={student} studentOrders={studentOrders.data} />;
};

export default SelectorPaymentContainer;
