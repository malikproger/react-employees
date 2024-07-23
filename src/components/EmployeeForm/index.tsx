import { Form, Space } from 'antd';
import { Employee } from '../../types';
import { Button } from '../Button';
import { ErrorMessage } from '../ErrorMessage';
import { Input } from '../Input';
import { EmployeeCardStyled } from './styled';

type Props<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  title: string;
  error?: string;
  employee?: T;
};

export const EmployeeForm = ({ onFinish, title, btnText, error, employee }: Props<Employee>) => {
  return (
    <EmployeeCardStyled title={title}>
      <Form name="employee-form" onFinish={onFinish} initialValues={employee}>
        <Input type="text" name="firstName" placeholder="Имя" />
        <Input type="text" name="lastName" placeholder="Фамилия" />
        <Input type="number" name="age" placeholder="Возраст" />
        <Input type="text" name="address" placeholder="Адрес" />
        <Space>
          <ErrorMessage message={error} />
          <Button htmlType="submit">{btnText}</Button>
        </Space>
      </Form>
    </EmployeeCardStyled>
  );
};
