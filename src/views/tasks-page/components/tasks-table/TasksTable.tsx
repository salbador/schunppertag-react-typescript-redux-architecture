import React from 'react';
import { Header, Table } from 'semantic-ui-react';
import TasksTableRow from '../tasks-table-row/TasksTableRow';
import ITaskTable from '../../../../selectors/tasks/models/ITaskTable';
import ITaskTableRow from '../../../../selectors/tasks/models/ITaskTableRow';

interface IProps {
  readonly tableData: ITaskTable;
}

const TasksTable: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { tableData } = props;

  return (
    <div key={tableData.title}>
      <Header as="h2">{tableData.title}</Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}>Scene</Table.HeaderCell>
            <Table.HeaderCell>Order</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Task</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableData.rows.map((model: ITaskTableRow) => (
            <TasksTableRow key={model.task} rowData={model} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TasksTable;
