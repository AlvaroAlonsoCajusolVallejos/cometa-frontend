import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectorPaymentContainer from './platform/payment/selectorPayment.container';
import SelectorStudentsContainer from './platform/students/selectorStudents.container';
import DisplayTemplate from './shared/templates/DisplayNew';

const AppRoutes = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <DisplayTemplate>
        <Routes>
          <Route path="/" element={<SelectorStudentsContainer />} />
          <Route path="payment/:studentName" element={<SelectorPaymentContainer />} />
        </Routes>
      </DisplayTemplate>
    </BrowserRouter>
  );
};

export default AppRoutes;
