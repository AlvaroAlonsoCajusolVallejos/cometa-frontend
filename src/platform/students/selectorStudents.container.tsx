import React from 'react';
import { useNavigate } from 'react-router';
import useStudentInfo from '../../shared/hooks/studentInfo.hook';
import useStudentOrders from '../../shared/hooks/studentOrders.hook';
import { StudentInfo } from '../../shared/models/StudentInfo';
import SelectorStudentsView from './selectorStudents.view';

const SelectorStudentsContainer = (): React.ReactElement => {
  const studentInfo = useStudentInfo();
  const studentOrders = useStudentOrders();
  const navigate = useNavigate();

  const handleSelectedStudent = (student: StudentInfo) => {
    localStorage.setItem('selectedStudent', JSON.stringify(student));
    localStorage.setItem('selectedStudentOrders', JSON.stringify(studentOrders));
    navigate(`/payment/${student.last_name + student.first_name}`);
  };

  return <SelectorStudentsView students={studentInfo.data} onClick={handleSelectedStudent} />;
};

export default SelectorStudentsContainer;
