import { createSelector, Selector } from 'reselect';
import IStore from '../../models/IStore';
import TaskModel from '../../stores/tiles/models/tasks/TaskModel';
import groupBy from 'lodash.groupby';
import dayjs from 'dayjs';
import ITaskTable from './models/ITaskTable';
import ITaskTableRow from './models/ITaskTableRow';

const _selectTasks = (tasks: TaskModel[]): ITaskTable[] => {
  const milestones: { [milestone: string]: TaskModel[] } = groupBy(tasks, 'milestone');

  return Object.entries(milestones).map(
    ([milestone, models]: [string, TaskModel[]]): ITaskTable => {
      return {
        title: `Milestone ${milestone}`,
        rows: _createTableRows(models),
      };
    }
  );
};

const _createTableRows = (models: TaskModel[]): ITaskTableRow[] => {
  return models.map(
    (model: TaskModel): ITaskTableRow => ({
      task: model.number,
      name: model.name,
      date: dayjs(model.addeddate).format('MMM D, YYYY'),
      image: model.image.medium,
      summary: model.summary,
    })
  );
};

export const selectTasks: Selector<IStore, ITaskTable[]> = createSelector((state: IStore) => state.tiles.tasks, _selectTasks);
