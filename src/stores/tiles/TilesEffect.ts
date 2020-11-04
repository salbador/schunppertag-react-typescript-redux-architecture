import environment from 'environment';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import * as HttpUtility from '../../utilities/HttpUtility';
import TileModel from './models/tiles/TileModel';
import TaskModel from './models/tasks/TaskModel';
import BoardModel from './models/board/BoardModel';
import { AxiosResponse } from 'axios';
import * as EffectUtility from '../../utilities/EffectUtility';

export const requestTile = async (tileId: string): Promise<TileModel | HttpErrorResponseModel> => {
  const endpoint: string = environment.api.tiles.replace(':tileId', tileId);

  return EffectUtility.getToModel<TileModel>(TileModel, endpoint);
};

export const requestTasks = async (tileId: string): Promise<TaskModel[] | HttpErrorResponseModel> => {
  const endpoint: string = environment.api.tasks.replace(':tileId', tileId);

  return EffectUtility.getToModel<TaskModel[]>(TaskModel, endpoint);
};

export const requestBoard = async (tileId: string): Promise<BoardModel[] | HttpErrorResponseModel> => {
  const endpoint: string = environment.api.board.replace(':tileId', tileId);

  // Below is just to tile you what the above "requestTasks" method is doing with "EffectUtility.getToModel".
  // In your application you can change this to match the "requestTasks" method.
  const response: AxiosResponse | HttpErrorResponseModel = await HttpUtility.get(endpoint);

  if (response instanceof HttpErrorResponseModel) {
    return response;
  }

  return response.data.map((json: Partial<BoardModel>) => new BoardModel(json));
};

/**
 * This is only to trigger an error api response so we can use it for an example in the ErrorsamplePage
 */
export const requestError = async (): Promise<any | HttpErrorResponseModel> => {
  const endpoint: string = environment.api.errorExample;
  const response: AxiosResponse | HttpErrorResponseModel = await HttpUtility.get(endpoint);

  if (response instanceof HttpErrorResponseModel) {
    return response;
  }

  return response.data;
};
