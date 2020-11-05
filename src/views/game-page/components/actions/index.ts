import { ActionModel } from '../types/Models';
import { ActionType } from '../types/ActionType';
import { Direction } from '../types/Direction';

export function newGameAction(size = 4): ActionModel {
  return {
    type: ActionType.NEWGAME,
    value: size,
  };
}

export function moveAction(direction: Direction): ActionModel {
  return {
    type: ActionType.MOVE,
    value: direction,
  };
}
