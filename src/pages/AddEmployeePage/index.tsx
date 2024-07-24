import { notification, Row } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddEmployeeMutation } from '../../app/services/employees';
import { EmployeeForm, Layout } from '../../components';
import { Employee } from '../../types';
import { isErrorWithMessage } from '../../utils';

export const AddEmployeePage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [addEmployee] = useAddEmployeeMutation();

  const handleAddEmployee = async (data: Employee) => {
    try {
      await addEmployee(data).unwrap();

      navigate('/');
      notification.success({ placement: 'bottomRight', message: 'Сотрудник успешно добавлен' });
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
        <EmployeeForm
          title="Добавить сотрудника"
          btnText="Добавить"
          onFinish={handleAddEmployee}
          error={error}
        />
      </Row>
    </Layout>
  );
};
