import { Card, Form, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Input, Layout, PasswordInput } from '../../components';
import { Paths } from '../../consts';

export const LoginPage = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Войдите" style={{ width: '30rem', marginTop: '120px' }}>
          <Form onFinish={() => null}>
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
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
