import React from 'react';
import axios from 'axios';
import { useMount } from 'react-use';
import { StudentInfo } from '../models/StudentInfo';

export interface StudentInfoState {
  data: StudentInfo[];
  isLoading: boolean;
}

const useStudentInfo = (): StudentInfoState => {
  const [studentInfo, setStudentInfo] = React.useState<StudentInfo[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  useMount(() => {
    const getStudentInfo = async () => {
      setIsLoading(true);
      const studentInfo = await axios.get<StudentInfo[]>(
        `${process.env.REACT_APP_API_URL}/api/studentInfo`,
      );
      setStudentInfo(studentInfo.data);

      setIsLoading(false);
    };
    getStudentInfo();
  });

  return {
    data: studentInfo,
    isLoading,
  };
};

export default useStudentInfo;
