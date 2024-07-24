import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Descriptions, Divider, Modal, notification, Space } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useGetEmployeeQuery, useRemoveEmployeeMutation } from '../../app/services/employees';
import { Button, ErrorMessage, Layout } from '../../components';
import { SpinStyled } from '../../components/Router/styled';
import { selectUser } from '../../features/auth/authSlice';
import { isErrorWithMessage } from '../../utils';

export const EmployeePage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetEmployeeQuery(params.id || '');
  const [removeEmployee] = useRemoveEmployeeMutation();
  const user = useSelector(selectUser);

  if (isLoading) {
    return <SpinStyled />;
  }

  if (!data) {
    return <Navigate to="/" />;
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteEmployee = async () => {
    hideModal();

    try {
      await removeEmployee(data.id).unwrap();

      navigate('/');
      notification.success({
        placement: 'bottomRight',
        message: 'Сотрудник успешно удалён',
      });
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
      <Descriptions title="Информация о сотруднике" bordered>
        <Descriptions.Item label="Имя" span={3}>
          {`${data.firstName} ${data.lastName}`}
        </Descriptions.Item>
        <Descriptions.Item label="Возраст" span={3}>
          {data.age}
        </Descriptions.Item>
        <Descriptions.Item label="Адрес" span={3}>
          {data.address}
        </Descriptions.Item>
      </Descriptions>
      {user?.id === data.UserId && (
        <>
          <Divider orientation="left">Действия</Divider>
          <Space>
            <Link to={`/employee/edit/${data.id}`}>
              <Button shape="round" type="default" icon={<EditOutlined />}>
                Редактировать
              </Button>
            </Link>
            <Button shape="round" danger onClick={showModal} icon={<DeleteOutlined />}>
              Удалить
            </Button>
          </Space>
        </>
      )}
      <ErrorMessage message={error} />
      <Modal
        title="Подтвердите удаление"
        open={isModalOpen}
        onOk={handleDeleteEmployee}
        onCancel={hideModal}
        okText="Подтвердить"
        cancelText="Отменить"
      >
        Вы действительно хотите удалить сотрудника из таблицы?
      </Modal>
    </Layout>
  );
};
