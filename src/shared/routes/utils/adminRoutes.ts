import GenericPage from '../../components/genericPage/GenericPage';
import { RoutesTypes } from './types/routes.types';

export const adminRoutes: RoutesTypes = [
  {
    text: 'Admin',
    path: '/admin',
    element: GenericPage,
  },
];
