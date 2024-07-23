import { LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Space, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../consts';
import { logout, selectUser } from '../../features/auth/authSlice';
import { ButtonStyled, LayoutHeaderStyled, TeamIconStyled } from './styled';

export const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };
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
      {user ? (
        <ButtonStyled
          ghost={true}
          icon={<LogoutOutlined />}
          onClick={onLogoutClick}
          style={{ color: 'white' }}
        >
          Выйти
        </ButtonStyled>
      ) : (
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
      )}
    </LayoutHeaderStyled>
  );
};
