import React from 'react';
import { Image, Table } from 'semantic-ui-react';
import ITaskTableRow from '../../../../selectors/tasks/models/ITaskTableRow';

interface IProps {
  readonly rowData: ITaskTableRow;
}

const TasksTableRow: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { rowData } = props;

  return (
    <Table.Row key={rowData.task}>
      <Table.Cell>
        <Image src={rowData.image} rounded={true} size="small" />
      </Table.Cell>
      <Table.Cell>{rowData.task}</Table.Cell>
      <Table.Cell>{rowData.date}</Table.Cell>
      <Table.Cell>{rowData.name}</Table.Cell>
    </Table.Row>
  );
};

export default TasksTableRow;
