import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routes } from './utils/routes';
import Login from '../../user/login/Login';

export const Pages = () => {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        {routes?.map((route) => {
          return (
            <Route
              path={route?.path}
              key={route?.path}
              element={route?.element()}
            />
          );
        })}
        <Route path='/login' element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default Pages;
