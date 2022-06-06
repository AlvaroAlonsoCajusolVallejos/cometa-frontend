import React from 'react';
import useStudentOrders, { StudentOrdersState } from '../../shared/hooks/studentOrders.hook';
import { StudentInfo } from '../../shared/models/StudentInfo';
import DisplayTemplateContext from '../../shared/templates/DisplayNew/contexts/displayTemplate.context';
import SelectorPaymentViewProps from './selectorPayment.view';

const SelectorPaymentContainer = (): React.ReactElement => {
  const studentOrders = useStudentOrders();
  if (
    !localStorage.getItem('selectedStudentOrders') &&
    studentOrders.isLoading &&
    studentOrders.data.length
  ) {
    localStorage.setItem('selectedStudentOrders', JSON.stringify(studentOrders));
  }
  const [selectedStudentOrders, setSelectedStudentOrders] = React.useState<StudentOrdersState>(
    localStorage.getItem('selectedStudentOrders')
      ? JSON.parse(localStorage.getItem('selectedStudentOrders')!)
      : studentOrders,
  );
  const { setToolbarTitle } = React.useContext(DisplayTemplateContext);
  const student: StudentInfo = JSON.parse(localStorage.getItem('selectedStudent')!);

  if (student && setToolbarTitle) setToolbarTitle(student.school.name);

  return (
    <SelectorPaymentViewProps
      student={student}
      studentOrders={selectedStudentOrders.data}
      setSelectedStudentOrders={setSelectedStudentOrders}
    />
  );
};

export default SelectorPaymentContainer;
