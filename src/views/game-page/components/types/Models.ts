import { BoardType } from '../utils/board';
import { ActionType } from './ActionType';

export interface ActionModel {
  type: ActionType;
  value?: any;
}

export interface StorageModel {
  highscore?: number;
  score?: number;
  board?: BoardType;
  boardSize?: number;
  lastValue?: number;
  defeat?: boolean;
}

export interface Point {
  x: number;
  y: number;
}
