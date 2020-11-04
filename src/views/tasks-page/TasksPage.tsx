import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IStore from '../../models/IStore';
import * as TilesAction from '../../stores/tiles/TilesAction';
import { selectTasks } from '../../selectors/tasks/TasksSelector';
import ITaskTable from '../../selectors/tasks/models/ITaskTable';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';
import TasksTable from './components/tasks-table/TasksTable';
import { Dispatch } from 'redux';

interface IProps {}

const TasksPage: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(TilesAction.requestTasks());
  }, [dispatch]);

  const isRequesting: boolean = useSelector((state: IStore) => selectRequesting(state, [TilesAction.REQUEST_TASKS]));
  const taskTables: ITaskTable[] = useSelector((state: IStore) => selectTasks(state));

  return (
    <>
      <LoadingIndicator isActive={isRequesting} />
      {taskTables.map((model: ITaskTable) => (
        <TasksTable key={model.title} tableData={model} />
      ))}
    </>
  );
};

export default TasksPage;
