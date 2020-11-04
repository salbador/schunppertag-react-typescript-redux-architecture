import ITaskTableRow from './ITaskTableRow';

export default interface ITaskTable {
  readonly title: string;
  readonly rows: ITaskTableRow[];
}
