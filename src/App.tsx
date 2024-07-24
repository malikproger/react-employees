import { ConfigProvider, theme } from 'antd';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './App.styled';
import { store } from './app/store';
import { Router } from './components/Router';

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <BrowserRouter basename="/react-employees/">
          <Router />
        </BrowserRouter>
      </ConfigProvider>
      <GlobalStyles />
    </Provider>
  );
}

export default App;
