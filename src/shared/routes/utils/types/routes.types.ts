import React, { ReactNode } from 'react';

export type RoutesTypes = {
  text: string;
  path: string;
  element: () => JSX.Element;
}[];
