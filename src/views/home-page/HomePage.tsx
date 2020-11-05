import styles from './HomePage.module.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import IStore from '../../models/IStore';
import * as TilesAction from '../../stores/tiles/TilesAction';
import MainOverview from './components/main-overview/MainOverview';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';
import Info from './components/Info';
import { Divider, Icon, Header } from 'semantic-ui-react';

interface IProps {}

const HomePage: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const isRequesting: boolean = useSelector((state: IStore) => selectRequesting(state, [TilesAction.REQUEST_TILE, TilesAction.REQUEST_BOARD]));

  return (
    <div className={styles.wrapper}>
      <LoadingIndicator isActive={isRequesting}>
        <MainOverview />
        <Divider horizontal={true}>
          <Header as="h4">
            <Icon name="header" /> Information
          </Header>
        </Divider>
        <Info />
      </LoadingIndicator>
    </div>
  );
};

export default HomePage;
