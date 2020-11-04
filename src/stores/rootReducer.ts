import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import IStore from '../models/IStore';
import tilesReducer from './tiles/TilesReducer';
import requestingReducer from './requesting/RequestingReducer';
import errorReducer from './error/ErrorReducer';
import toastsReducer from './toasts/ToastsReducer';

const rootReducer = (history: History): Reducer<IStore> => {
  const reducerMap: ReducersMapObject<IStore> = {
    error: errorReducer,
    requesting: requestingReducer,
    router: connectRouter(history) as any,
    tiles: tilesReducer,
    toasts: toastsReducer,
  };

  return combineReducers(reducerMap);
};

export default rootReducer;
