import { Form, Row, Space, Typography } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation, UserData } from '../../app/services/auth';
import { Button, ErrorMessage, Input, Layout, PasswordInput } from '../../components';
import { Paths } from '../../consts';
import { isErrorWithMessage } from '../../utils';
import { CardStyled, GlobalStyles } from './styled';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginMutation();
  const [error, setError] = useState('');

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();

      navigate('/');
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError('Неизвестная ошибка');
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <CardStyled title="Войдите">
          <Form onFinish={login}>
            <Input type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </CardStyled>
      </Row>
      <GlobalStyles />
    </Layout>
  );
};
