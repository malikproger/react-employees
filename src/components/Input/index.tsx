import { Input as AntInput, Form } from 'antd';

type Props = {
  name: string;
  placeholder: string;
  type?: string;
};

export const Input = ({ type = 'text', name, placeholder }: Props) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required: true, message: 'Обязательное поле' }]}
      shouldUpdate={true}
    >
      <AntInput placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};
