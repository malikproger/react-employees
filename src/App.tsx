import { ConfigProvider, theme } from 'antd';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './App.styled';
import { store } from './app/store';
import { Paths } from './consts';
import { Auth } from './features/auth/auth';
import { AddEmployeePage, EmployeesPage, LoginPage, RegisterPage, Status } from './pages';

const router = createBrowserRouter(
  [
    {
      path: Paths.home,
      element: <EmployeesPage />,
    },
    {
      path: Paths.login,
      element: <LoginPage />,
    },
    {
      path: Paths.register,
      element: <RegisterPage />,
    },
    {
      path: Paths.employeeAdd,
      element: <AddEmployeePage />,
    },
    {
      path: `${Paths.status}/:status`,
      element: <Status />,
    },
  ],
  {
    basename: '/react-employees/',
  },
);

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </ConfigProvider>
      <GlobalStyles />
    </Provider>
  );
}

export default App;
