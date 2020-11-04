import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IStore from '../../../../models/IStore';
import { Card } from 'semantic-ui-react';
import BoardModel from '../../../../stores/tiles/models/board/BoardModel';
import * as TilesAction from '../../../../stores/tiles/TilesAction';
import ActorCard from './components/actor-card/ActorCard';
import { Dispatch } from 'redux';

interface IProps {}

const Actors: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(TilesAction.requestBoard());
  }, [dispatch]);

  const actors: BoardModel[] = useSelector((state: IStore) => state.tiles.actors);

  return (
    <Card.Group centered={true}>
      {actors.map((model: BoardModel) => (
        <ActorCard key={model.person.name} cardData={model} />
      ))}
    </Card.Group>
  );
};

export default Actors;
