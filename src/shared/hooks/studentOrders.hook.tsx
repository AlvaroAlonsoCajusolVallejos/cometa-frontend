import React from 'react';
import axios from 'axios';
import { useMount } from 'react-use';
import { StudentOrders } from '../models/StudentOrders';

export interface StudentOrdersState {
  data: StudentOrders[];
  isLoading: boolean;
}

const useStudentOrders = (): StudentOrdersState => {
  const [studentOrders, setStudentOrders] = React.useState<StudentOrders[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  useMount(() => {
    const getStudentOrders = async () => {
      setIsLoading(true);
      const studentOrders = await axios.get<StudentOrders[]>(
        `${process.env.REACT_APP_API_URL}/api/studentOrders`,
      );
      setStudentOrders(studentOrders.data);

      setIsLoading(false);
    };
    getStudentOrders();
  });

  return {
    data: studentOrders,
    isLoading,
  };
};

export default useStudentOrders;
