import { ConfigProvider, theme } from 'antd';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './App.styled';
import { store } from './app/store';
import { Paths } from './consts';
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
        <RouterProvider router={router} />
      </ConfigProvider>
      <GlobalStyles />
    </Provider>
  );
}

export default App;
