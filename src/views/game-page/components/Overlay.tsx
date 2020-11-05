import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { newGameAction } from './actions';
import { StateType } from './reducers';

import { victoryMsgEncouragements } from '../../../constants/GameConfig';

const Overlay: React.FC = () => {
  const dispatch = useDispatch();
  const newGame = useCallback(() => dispatch(newGameAction()), [dispatch]);

  const defeat = useSelector((state: StateType) => state.defeat);
  const victory = useSelector((state: StateType) => state.victory);
  const lastValue = useSelector((state: StateType) => state.lastValue);
  const encouragement = useSelector((state: StateType) => state.encouragement);

  if (victory) {
    return (
      <div className="overlay overlay-victory">
        <h1>You win!</h1>
        <div className="overlay-buttons">
          <button onClick={newGame}>Try again</button>
        </div>
      </div>
    );
  }
  if (encouragement) {
    let msg = 'Good Job!';
    if (lastValue === 8) {
      msg = victoryMsgEncouragements[0];
    }
    if (lastValue === 32) {
      msg = victoryMsgEncouragements[1];
    }
    if (lastValue === 64) {
      msg = victoryMsgEncouragements[2];
    }
    if (lastValue === 128) {
      msg = victoryMsgEncouragements[3];
    }
    if (lastValue === 254) {
      msg = victoryMsgEncouragements[4];
    }
    if (lastValue === 512) {
      msg = victoryMsgEncouragements[5];
    }
    if (lastValue === 1024) {
      msg = victoryMsgEncouragements[6];
    }
    if (lastValue === 2048) {
      msg = victoryMsgEncouragements[7];
    }
    if (lastValue === 4096) {
      msg = victoryMsgEncouragements[8];
    }
    return (
      <div className="overlay overlay-encouragement">
        <div className="header-scores-score-encouragement" key={'somekey'}>
          <h1>{msg}</h1>
        </div>
      </div>
    );
  }

  if (defeat) {
    return (
      <div className="overlay overlay-defeat">
        <h1>Game over!</h1>
        <div className="overlay-buttons">
          <button onClick={newGame}>Try again</button>
        </div>
      </div>
    );
  }

  return null;
};

export default Overlay;
