import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { newGameAction } from './actions';
import { StateType } from './reducers';

const Overlay: React.FC = () => {
  const dispatch = useDispatch();
  const newGame = useCallback(() => dispatch(newGameAction()), [dispatch]);

  const defeat = useSelector((state: StateType) => state.defeat);
  const victory = useSelector((state: StateType) => state.victory);

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
