import { RoutesTypes } from './types/routes.types';
import { adminRoutes } from './adminRoutes';
import { mainRoutes } from './mainRoutes';

export const routes: RoutesTypes = [...mainRoutes, ...adminRoutes];