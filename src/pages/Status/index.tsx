import { Button, Result } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { RowStyled } from './styled';

const statuses: Record<string, string> = {
  created: 'Сотрудник успешно создан',
  updated: 'Сотрудник успешно обновлён',
  deleted: 'Сотрудник успешно удалён',
};

export const Status = () => {
  const { status } = useParams();
  return (
    <RowStyled align="middle" justify="center">
      <Result
        status={status ? 'success' : 404}
        title={status ? statuses[status] : 'Не найдено'}
        extra={
          <Link to="/">
            <Button key="dashboard">На Главную</Button>
          </Link>
        }
      />
    </RowStyled>
  );
};
