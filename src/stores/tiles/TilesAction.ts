import * as TilesEffect from './TilesEffect';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import * as ActionUtility from '../../utilities/ActionUtility';
import { ReduxDispatch } from '../../models/ReduxProps';
import IStore from '../../models/IStore';
import TileModel from './models/tiles/TileModel';
import TaskModel from './models/tasks/TaskModel';
import BoardModel from './models/board/BoardModel';

type ActionUnion = undefined | HttpErrorResponseModel | TileModel | TaskModel[] | BoardModel[];

export const REQUEST_TILE: string = 'TilesAction.REQUEST_TILE';
export const REQUEST_TILE_FINISHED: string = 'TilesAction.REQUEST_TILE_FINISHED';

export const requestTile = (): any => {
  return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore): Promise<void> => {
    const tileId: string = getState().tiles.currentTileId;

    await ActionUtility.createThunkEffect<TileModel>(dispatch, REQUEST_TILE, TilesEffect.requestTile, tileId);
  };
};

export const REQUEST_TASKS: string = 'TilesAction.REQUEST_TASKS';
export const REQUEST_TASKS_FINISHED: string = 'TilesAction.REQUEST_TASKS_FINISHED';

export const requestTasks = (): any => {
  return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore): Promise<void> => {
    const tileId: string = getState().tiles.currentTileId;

    await ActionUtility.createThunkEffect<TaskModel[]>(dispatch, REQUEST_TASKS, TilesEffect.requestTasks, tileId);
  };
};

export const REQUEST_BOARD: string = 'TilesAction.REQUEST_BOARD';
export const REQUEST_BOARD_FINISHED: string = 'TilesAction.REQUEST_BOARD_FINISHED';

export const requestBoard = (): any => {
  return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore): Promise<void> => {
    const tileId: string = getState().tiles.currentTileId;

    await ActionUtility.createThunkEffect<BoardModel[]>(dispatch, REQUEST_BOARD, TilesEffect.requestBoard, tileId);
  };
};

export const REQUEST_ERROR: string = 'TilesAction.REQUEST_ERROR';
export const REQUEST_ERROR_FINISHED: string = 'TilesAction.REQUEST_ERROR_FINISHED';

export const requestError = (): any => {
  return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore): Promise<void> => {
    await ActionUtility.createThunkEffect<any>(dispatch, REQUEST_ERROR, TilesEffect.requestError);
  };
};
