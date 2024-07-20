import { Card, Form, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Input, Layout, PasswordInput } from '../../components';
import { Paths } from '../../consts';

export const RegisterPage = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Зарегистрируйтесь" style={{ width: '30rem', marginTop: '120px' }}>
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
        </Card>
      </Row>
    </Layout>
  );
};
