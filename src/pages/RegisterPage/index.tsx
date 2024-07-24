import { Form, Row, Space, Typography } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../app/services/auth';
import { Button, ErrorMessage, Input, Layout, PasswordInput } from '../../components';
import { Paths } from '../../consts';
import { User } from '../../types';
import { isErrorWithMessage } from '../../utils';
import { CardStyled } from './styled';

type RegisterData = Omit<User, 'id'> & { confirmPassword: string };

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [registerUser] = useRegisterMutation();

  const register = async (data: RegisterData) => {
    try {
      await registerUser(data).unwrap();

      navigate('/');
    } catch (error) {
      const maybeError = isErrorWithMessage(error);

      if (maybeError) {
        setError(error.data.message);
      } else {
        setError('Неизвестная ошибка');
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <CardStyled title="Зарегистрируйтесь">
          <Form onFinish={register}>
            <Input name="name" placeholder="Имя" />
            <Input type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <PasswordInput name="confirmPassword" placeholder="Повторный пароль" />
            <Button type="primary" htmlType="submit">
              Зарегистрироваться
            </Button>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Уже зарегистрированы? <Link to={Paths.login}>Войдите</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </CardStyled>
      </Row>
    </Layout>
  );
};
