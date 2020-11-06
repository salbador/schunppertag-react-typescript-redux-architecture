import { Store } from 'redux';

import { ActionType } from '../types/ActionType';
import { ActionModel } from '../types/Models';
import { initializeBoard, BoardType, updateBoard, movePossible } from '../utils/board';
import { Direction } from '../types/Direction';
import { getStoredData, setStoredData } from '../utils/localStorage';
import { Animation } from '../types/Animations';
import { defaultBoardSize, victoryTileValue, victoryEncouragements } from '../../../../constants/GameConfig';
// import value from 'environment';

export interface StateType {
  boardSize: number;
  board: BoardType;
  victory: boolean;
  encouragement: boolean;
  defeat: boolean;
  score: number;
  scoreIncrease?: number;
  highscore: number;
  moveId?: string;
  lastValue?: number;
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
    encouragement: false,
    score: storedData.score || 0,
    highscore: storedData.highscore || 0,
    lastValue: storedData.lastValue || 0,
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
  newState.encouragement = false;
  let found = false;
  victoryEncouragements.forEach(function(i) {
    found = !!newState.board.find(function(v) {
      return v === i;
    });
    if (found) {
      newState.lastValue = i;
      newState.encouragement = true;
      return true;
    }
  });
  newState.victory = !!newState.board.find((value) => {
    newState.lastValue = value;
    return value === victoryTileValue;
  });
  setStoredData(newState);

  return newState;
}

export default applicationState;
