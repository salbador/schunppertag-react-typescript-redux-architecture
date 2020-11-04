import styles from './GamePage.module.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import IStore from '../../models/IStore';
import * as TilesAction from '../../stores/tiles/TilesAction';
import Actors from './components/actors/Actors';
// import Actors from './components/Game';
// Game fieldSize={4} />,
import { Divider, Icon, Header } from 'semantic-ui-react';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';

import { Provider } from 'react-redux';
import { animationDuration, gridGap } from '../../constants/GameConfig';
import UpperBody from './components/UpperBody';
import Board from './components/Board';
import Info from './components/Info';
import BoardSizePicker from './components/BoardSizePicker';
import createStore from './components/store';

const store = createStore();

interface IProps {}

const HomePage: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const isRequesting: boolean = useSelector((state: IStore) => selectRequesting(state, [TilesAction.REQUEST_TILE, TilesAction.REQUEST_BOARD]));

  return (
    <div className={styles.wrapper}>
      <LoadingIndicator isActive={isRequesting}>
        <React.StrictMode>
          <Provider store={store}>
            <div
              className="app"
              style={
                {
                  '--animation-duration': animationDuration + 'ms',
                  '--grid-gap': gridGap,
                } as any
              }
            ></div>
            <div className="page">
              <UpperBody />
              <Board />
              <BoardSizePicker />
              <Info />
            </div>
          </Provider>
        </React.StrictMode>
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
