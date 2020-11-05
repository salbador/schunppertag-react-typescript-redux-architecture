import { Store } from 'redux';

import { ActionType } from '../types/ActionType';
import { ActionModel } from '../types/Models';
import { initializeBoard, BoardType, updateBoard, movePossible } from '../utils/board';
import { Direction } from '../types/Direction';
import { getStoredData, setStoredData } from '../utils/localStorage';
import { Animation } from '../types/Animations';
import { defaultBoardSize, victoryTileValue } from '../../../../constants/GameConfig';

export interface StateType {
  boardSize: number;
  board: BoardType;
  victory: boolean;
  defeat: boolean;
  score: number;
  scoreIncrease?: number;
  highscore: number;
  moveId?: string;
  animations?: Animation[];
}

const storedData = getStoredData();

function initializeState(): StateType {
  const update = initializeBoard(defaultBoardSize);

  return {
    boardSize: storedData.boardSize || defaultBoardSize,
    board: storedData.board || update.board,
    defeat: storedData.defeat || false,
    victory: false,
    score: storedData.score || 0,
    highscore: storedData.highscore || 0,
    moveId: new Date().getTime().toString(),
  };
}

let initialState: StateType = initializeState();

export type StoreType = Store<StateType, ActionModel>;

function applicationState(state = initialState, action: ActionModel) {
  const newState = { ...state };

  switch (action.type) {
    case ActionType.NEWGAME:
      {
        const size = action.value || newState.boardSize;
        const update = initializeBoard(size);
        newState.boardSize = size;
        newState.board = update.board;
        newState.score = 0;
        newState.animations = update.animations;
        newState.victory = false;
      }
      break;
    case ActionType.MOVE:
      {
        if (newState.defeat) {
          break;
        }

        const direction = action.value as Direction;
        const update = updateBoard(newState.board, direction);
        newState.board = update.board;
        newState.score += update.scoreIncrease;
        newState.animations = update.animations;
        newState.scoreIncrease = update.scoreIncrease;
        newState.moveId = new Date().getTime().toString();
      }
      break;

    default:
      return state;
  }

  if (newState.score > newState.highscore) {
    newState.highscore = newState.score;
  }

  newState.defeat = !movePossible(newState.board);
  newState.victory = !!newState.board.find((value) => value === victoryTileValue);
  setStoredData(newState);

  return newState;
}

export default applicationState;
