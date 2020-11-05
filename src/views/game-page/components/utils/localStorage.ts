import { StorageModel } from '../types/Models';

const ITEM_NAME = 'SCHUNPPERTAG_REACT_TYPESCRIPT_REDUX';

export function getStoredData(): StorageModel {
  if (!localStorage.getItem(ITEM_NAME)) {
    return {};
  }

  let model: StorageModel = {};

  try {
    const data = JSON.parse(localStorage.getItem(ITEM_NAME) as string);

    if (data.hasOwnProperty('board') && data.hasOwnProperty('boardSize') && data.hasOwnProperty('score') && data.hasOwnProperty('defeat')) {
      if (
        Array.isArray(data.board) &&
        typeof data.boardSize === 'number' &&
        data.board.length === data.boardSize ** 2 &&
        typeof data.score === 'number' &&
        typeof data.defeat === 'boolean'
      ) {
        for (let value of data.board) {
          if (typeof value !== 'number') {
            throw new Error('Invalid stored data.');
          }

          // Make sure the value is a power of 2.
          if (value !== 0 && Math.log2(value) % 1 !== 0) {
            throw new Error('Invalid stored data.');
          }
        }

        model.board = data.board;
        model.boardSize = data.boardSize;
        model.score = data.score;
        model.lastValue = data.lastValue;
        model.defeat = data.defeat;
      } else {
        throw new Error('Invalid stored data.');
      }
    }

    if (data.hasOwnProperty('highscore')) {
      if (typeof data.highscore === 'number') {
        model.highscore = data.highscore;
      } else {
        throw new Error('Invalid stored data.');
      }
    }
  } catch {
    localStorage.removeItem(ITEM_NAME);
  }

  return model;
}

export function setStoredData(model: StorageModel) {
  localStorage.setItem(
    ITEM_NAME,
    JSON.stringify({
      highscore: model.highscore,
      score: model.score,
      board: model.board,
      lastValue: model.lastValue,
      boardSize: model.boardSize,
      defeat: model.defeat,
    })
  );
}
