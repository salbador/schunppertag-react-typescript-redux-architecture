import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IStore from '../../../../models/IStore';
import { Card } from 'semantic-ui-react';
import BoardModel from '../../../../stores/tiles/models/board/BoardModel';
import * as TilesAction from '../../../../stores/tiles/TilesAction';
import HighscoreCard from './components/highscore-card/HighscoreCard';
import { Dispatch } from 'redux';

interface IProps {}

const Highscores: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(TilesAction.requestBoard());
  }, [dispatch]);

  const highscores: BoardModel[] = useSelector((state: IStore) => state.tiles.highscores);

  return (
    <Card.Group centered={true}>
      {highscores.map((model: BoardModel) => (
        <HighscoreCard key={model.person.name} cardData={model} />
      ))}
    </Card.Group>
  );
};

export default Highscores;
