import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './utils/routes';
import GenericPage from '../components/genericPage/GenericPage';

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
      </Routes>
    </Suspense>
  );
};

export default Pages;
