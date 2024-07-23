import { Form, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Input, Layout, PasswordInput } from '../../components';
import { Paths } from '../../consts';
import { CardStyled } from './styled';

export const RegisterPage = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <CardStyled title="Зарегистрируйтесь">
          <Form onFinish={() => null}>
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
          </Space>
        </CardStyled>
      </Row>
    </Layout>
  );
};
