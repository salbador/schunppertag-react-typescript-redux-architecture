import React, { Suspense, lazy } from 'react';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';
import IAction from '../models/IAction';
import RouteEnum from '../constants/RouteEnum';
import MainNav from './components/main-nav/MainNav';
import LoadingIndicator from './components/loading-indicator/LoadingIndicator';
import Toasts from './components/toasts/Toasts';

const HomePage = lazy(() => import('./home-page/HomePage'));
const NotFoundPage = lazy(() => import('./not-found-page/NotFoundPage'));
const TasksPage = lazy(() => import('./tasks-page/TasksPage'));
const GamePage = lazy(() => import('./game-page/GamePage'));
const ErrorsamplePage = lazy(() => import('./errorsample-page/ErrorsamplePage'));

interface IProps {
  readonly history: History;
  readonly dispatch: Dispatch<IAction<any>>;
}

const App: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <ConnectedRouter history={props.history}>
      <Suspense fallback={<LoadingIndicator isActive={true} />}>
        <MainNav />
        <Switch>
          <Route exact={true} path={RouteEnum.Home} component={HomePage} />
          <Route path={RouteEnum.Tasks} component={TasksPage} />
          <Route path={RouteEnum.Game} component={GamePage} />
          <Route path={RouteEnum.Errorsample} component={ErrorsamplePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Toasts />
      </Suspense>
    </ConnectedRouter>
  );
};

export default App;
