import { useSelector } from 'react-redux';
import { Navigate, Route, RouteProps, Routes } from 'react-router-dom';
import { useCurrentQuery } from '../../app/services/auth';
import { Paths } from '../../consts';
import { selectIsAuthenticated } from '../../features/auth/authSlice';
import {
  AddEmployeePage,
  EditEmployeePage,
  EmployeePage,
  EmployeesPage,
  LoginPage,
  RegisterPage,
  Status,
} from '../../pages';

export const Router = () => {
  const { isLoading: isAuthenticating } = useCurrentQuery();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const renderSingleRoute = (routeProps: RouteProps) => {
    return <Route {...routeProps} key={routeProps.path} />;
  };

  const renderRoutes = () => {
    if (!isAuthenticated) {
      return (
        <Routes>
          {[
            {
              path: Paths.login,
              element: <LoginPage />,
            },
            {
              path: Paths.register,
              element: <RegisterPage />,
            },
          ].map(renderSingleRoute)}
          <Route path="*" element={renderRedirect()} />
        </Routes>
      );
    }

    return (
      <Routes>
        {[
          {
            path: Paths.employeeAdd,
            element: <AddEmployeePage />,
          },
          {
            path: Paths.home,
            element: <EmployeesPage />,
          },
          {
            path: `${Paths.status}/:status`,
            element: <Status />,
          },
          {
            path: `${Paths.employee}/:id`,
            element: <EmployeePage />,
          },
          {
            path: `${Paths.employeeEdit}/:id`,
            element: <EditEmployeePage />,
          },
        ].map(renderSingleRoute)}
        <Route path="*" element={renderRedirect()} />
      </Routes>
    );
  };

  const renderRedirect = () => {
    if (!isAuthenticated) {
      return <Navigate to={Paths.login} />;
    }

    return <Navigate to={Paths.home} />;
  };

  if (isAuthenticating) {
    return <span>Загрузка</span>;
  }

  return renderRoutes();
};
