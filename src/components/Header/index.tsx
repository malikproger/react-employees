import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Paths } from '../../consts';
import { ButtonStyled, LayoutHeaderStyled, TeamIconStyled } from './styled';

export const Header = () => {
  return (
    <LayoutHeaderStyled>
      <Space>
        <TeamIconStyled />
        <Link to={Paths.home}>
          <ConfigProvider wave={{ disabled: true }}>
            <ButtonStyled ghost={true}>
              <Typography.Title level={1}>Сотрудники</Typography.Title>
            </ButtonStyled>
          </ConfigProvider>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.register}>
          <ButtonStyled ghost={true} icon={<UserOutlined />} style={{ color: 'white' }}>
            Зарегистрироваться
          </ButtonStyled>
        </Link>
        <Link to={Paths.login}>
          <ButtonStyled ghost={true} icon={<LoginOutlined />} style={{ color: 'white' }}>
            Войти
          </ButtonStyled>
        </Link>
      </Space>
    </LayoutHeaderStyled>
  );
};
