import { PlusCircleOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { useGetAllEmployeesQuery } from '../../app/services/employees';
import { Button, Layout } from '../../components';
import { Paths } from '../../consts';
import { Employee } from '../../types';

const columns: ColumnsType<Employee> = [
  {
    title: 'Имя',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Возраст',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
];

export const EmployeesPage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllEmployeesQuery();

  const goToAddUser = () => navigate(Paths.employeeAdd);
  return (
    <Layout>
      <Button type="primary" onClick={goToAddUser} icon={<PlusCircleOutlined />}>
        Добавить
      </Button>
      <Table
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={columns}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return {
            onClick: () => navigate(`${Paths.employee}/${record.id}`),
          };
        }}
      />
    </Layout>
  );
};
