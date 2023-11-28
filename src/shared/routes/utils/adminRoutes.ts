import Admin from '../../../dashboard/admin/Admin';
import { RoutesTypes } from './types/routes.types';

export const adminRoutes: RoutesTypes = [
  {
    text: 'Admin',
    path: '/admin',
    element: Admin,
  },
];
