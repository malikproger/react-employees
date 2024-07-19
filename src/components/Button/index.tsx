import { Button as AntButton, Form } from 'antd';
import React from 'react';

type Props = {
  children: React.ReactNode;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  type?: 'link' | 'text' | 'default' | 'primary' | 'dashed' | undefined;
  danger?: boolean;
  loading?: boolean;
  shape?: 'default' | 'circle' | 'round' | undefined;
  icon?: React.ReactNode;
  ghost?: boolean;
};

export const Button = ({
  children,
  htmlType = 'button',
  type,
  danger,
  loading,
  shape,
  icon,
  onClick,
  ghost,
}: Props) => {
  return (
    <Form.Item>
      <AntButton
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        onClick={onClick}
        ghost={ghost}
      >
        {children}
      </AntButton>
    </Form.Item>
  );
};
