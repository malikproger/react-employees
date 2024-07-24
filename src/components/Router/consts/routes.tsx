import { RouteProps } from 'react-router-dom';
import { Paths } from '../../../consts';
import {
  AddEmployeePage,
  EditEmployeePage,
  EmployeePage,
  EmployeesPage,
  LoginPage,
  RegisterPage,
} from '../../../pages';

export const privateRoutes: RouteProps[] = [
  {
    path: Paths.employeeAdd,
    element: <AddEmployeePage />,
  },
  {
    path: Paths.home,
    element: <EmployeesPage />,
  },
  {
    path: `${Paths.employee}/:id`,
    element: <EmployeePage />,
  },
  {
    path: `${Paths.employeeEdit}/:id`,
    element: <EditEmployeePage />,
  },
];

export const publicRoutes: RouteProps[] = [
  {
    path: Paths.login,
    element: <LoginPage />,
  },
  {
    path: Paths.register,
    element: <RegisterPage />,
  },
];
