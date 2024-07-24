import { useSelector } from 'react-redux';
import { Navigate, Route, RouteProps, Routes } from 'react-router-dom';
import { useCurrentQuery } from '../../app/services/auth';
import { Paths } from '../../consts';
import { selectIsAuthenticated } from '../../features/auth/authSlice';
import { privateRoutes, publicRoutes } from './consts/routes';
import { SpinStyled } from './styled';

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
          {publicRoutes.map(renderSingleRoute)}
          <Route path="*" element={renderRedirect()} />
        </Routes>
      );
    }

    return (
      <Routes>
        {privateRoutes.map(renderSingleRoute)}
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
    return <SpinStyled />;
  }

  return renderRoutes();
};
