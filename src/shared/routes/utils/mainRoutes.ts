import { RoutesTypes } from './types/routes.types';

import Home from '../../../user/home/Home';

export const mainRoutes: RoutesTypes = [
  {
    text: 'Asosiy',
    path: '/',
    element: Home,
  },
];
