import { TeamOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import styled from 'styled-components';

export const TeamIconStyled = styled(TeamOutlined)`
  margin-right: 12px;
  font-size: 26px;
`;

export const ButtonStyled = styled(Button)`
  border: none;
`;

export const LayoutHeaderStyled = styled(Layout.Header)`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: transparent;
`;
