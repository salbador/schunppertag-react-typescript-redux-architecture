import { BoardType } from '../utils/board';
import { ActionType } from './ActionType';

export interface ActionModel {
  type: ActionType;
  value?: any;
}

export interface StorageModel {
  best?: number;
  score?: number;
  board?: BoardType;
  boardSize?: number;
  defeat?: boolean;
  victoryDismissed?: boolean;
}

export interface Point {
  x: number;
  y: number;
}
