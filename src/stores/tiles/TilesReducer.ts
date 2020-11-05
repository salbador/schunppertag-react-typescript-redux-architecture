import ITilesState from './models/ITilesState';
import * as TilesAction from './TilesAction';
import IAction from '../../models/IAction';
import TileModel from './models/tiles/TileModel';
import TaskModel from './models/tasks/TaskModel';
import BoardModel from './models/board/BoardModel';
import baseReducer from '../../utilities/BaseReducer';
import { Reducer } from 'redux';

export const initialState: ITilesState = {
  currentTileId: '74',
  tile: null,
  tasks: [],
  highscores: [],
};

const tilesReducer: Reducer = baseReducer(initialState, {
  [TilesAction.REQUEST_TILE_FINISHED](state: ITilesState, action: IAction<TileModel>): ITilesState {
    return {
      ...state,
      tile: action.payload!,
    };
  },

  [TilesAction.REQUEST_TASKS_FINISHED](state: ITilesState, action: IAction<TaskModel[]>): ITilesState {
    return {
      ...state,
      tasks: action.payload!,
    };
  },

  [TilesAction.REQUEST_BOARD_FINISHED](state: ITilesState, action: IAction<BoardModel[]>): ITilesState {
    return {
      ...state,
      highscores: action.payload!,
    };
  },
});

export default tilesReducer;
