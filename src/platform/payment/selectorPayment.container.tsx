import React from 'react';
import { StudentOrdersState } from '../../shared/hooks/studentOrders.hook';
import { StudentInfo } from '../../shared/models/StudentInfo';
import DisplayTemplateContext from '../../shared/templates/DisplayNew/contexts/displayTemplate.context';
import SelectorPaymentViewProps from './selectorPayment.view';

const SelectorPaymentContainer = (): React.ReactElement => {
  const { setToolbarTitle } = React.useContext(DisplayTemplateContext);
  const student: StudentInfo = JSON.parse(localStorage.getItem('selectedStudent')!);
  if (student && setToolbarTitle) setToolbarTitle(student.school.name);
  const [selectedStudentOrders, setSelectedStudentOrders] = React.useState<StudentOrdersState>(
    JSON.parse(localStorage.getItem('selectedStudentOrders')!),
  );

  return (
    <SelectorPaymentViewProps
      student={student}
      studentOrders={selectedStudentOrders.data}
      setSelectedStudentOrders={setSelectedStudentOrders}
    />
  );
};

export default SelectorPaymentContainer;
