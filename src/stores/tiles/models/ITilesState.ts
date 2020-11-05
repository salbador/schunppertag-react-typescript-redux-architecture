import TileModel from './tiles/TileModel';
import TaskModel from './tasks/TaskModel';
import BoardModel from './board/BoardModel';

export default interface ITilesState {
  readonly currentTileId: string;
  readonly tile: TileModel | null;
  readonly tasks: TaskModel[];
  readonly highscores: BoardModel[];
}
