import styles from './GamePage.module.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import IStore from '../../models/IStore';
import * as TilesAction from '../../stores/tiles/TilesAction';
import Actors from './components/actors/Actors';
// import Actors from './components/actors/Game';
// Game fieldSize={4} />,
import { Divider, Icon, Header } from 'semantic-ui-react';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';

interface IProps {}

const HomePage: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const isRequesting: boolean = useSelector((state: IStore) => selectRequesting(state, [TilesAction.REQUEST_TILE, TilesAction.REQUEST_BOARD]));

  return (
    <div className={styles.wrapper}>
      <LoadingIndicator isActive={isRequesting}>
        <Divider horizontal={true}>
          <Header as="h4">
            <Icon name="users" /> Scores
          </Header>
        </Divider>
        <Actors />
      </LoadingIndicator>
    </div>
  );
};

export default HomePage;
