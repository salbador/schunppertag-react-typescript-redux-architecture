import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newGameAction } from './actions';
import { StateType } from './reducers';

const BoardHeader: React.FC = () => {
  const dispatch = useDispatch();
  const newGame = useCallback(() => dispatch(newGameAction()), [dispatch]);

  const score = useSelector((state: StateType) => state.score);
  const scoreIncrease = useSelector((state: StateType) => state.scoreIncrease);
  const moveId = useSelector((state: StateType) => state.moveId);
  const highscore = useSelector((state: StateType) => state.highscore);
  //   {!!scoreIncrease && (
  //    <div className="header-scores-score-increase" key={moveId}>
  //      +{scoreIncrease}
  //    </div>
  //  )}

  return (
    <div className="header">
      <div className="header-row">
        <h1>Schnuppertag React Typescript Redux</h1>
        <div className="header-scores">
          <div className="header-scores-score">
            <div>Score</div>
            <div>{score}</div>
          </div>
          <div className="header-scores-score">
            <div>Highscore</div>
            <div>{highscore}</div>
          </div>
        </div>
      </div>
      <div className="header-row">
        <div className="header-buttons">
          <button onClick={newGame}>New game</button>
        </div>
      </div>
      {!!scoreIncrease && (
        <div className="overlay overlay-encouragement">
          <div className="header-scores-score-encouragement" key={'scoreIncrease'}>
            <h1> +{scoreIncrease}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardHeader;
