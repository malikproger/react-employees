import { ConfigProvider, theme } from 'antd';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './App.styled';
import { store } from './app/store';
import { Paths } from './consts';
import { Auth } from './features/auth/auth';
import { HomePage, LoginPage, RegisterPage } from './pages';

const router = createBrowserRouter(
  [
    {
      path: Paths.home,
      element: <HomePage />,
    },
    {
      path: Paths.login,
      element: <LoginPage />,
    },
    {
      path: Paths.register,
      element: <RegisterPage />,
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
