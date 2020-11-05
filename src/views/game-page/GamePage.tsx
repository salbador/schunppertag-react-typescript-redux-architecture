import './GamePage.module.scss';
import styles from './GamePage.module.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import IStore from '../../models/IStore';
import * as TilesAction from '../../stores/tiles/TilesAction';
import Highscores from './components/highscores/Highscores';

import { Divider, Icon, Header } from 'semantic-ui-react';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';

import { Provider } from 'react-redux';
import { animationDuration, gridGap } from '../../constants/GameConfig';
import BoardHeader from './components/BoardHeader';
import Board from './components/Board';

import createStore from './components/store';

const store = createStore();

interface IProps {}

const GamePage: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
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
              <BoardHeader />
              <Board />
            </div>
          </Provider>
        </React.StrictMode>
        <Divider horizontal={true}>
          <Header as="h4">
            <Icon name="users" /> Highscores
          </Header>
        </Divider>
        <Highscores />
      </LoadingIndicator>
    </div>
  );
};

export default GamePage;
