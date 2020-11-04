import { RouterState } from 'connected-react-router';
import ITilesState from '../stores/tiles/models/ITilesState';
import IRequestingState from '../stores/requesting/models/IRequestingState';
import IErrorState from '../stores/error/models/IErrorState';
import IToastsState from '../stores/toasts/models/IToastsState';

export default interface IStore {
  readonly error: IErrorState;
  readonly requesting: IRequestingState;
  readonly router: RouterState;
  readonly tiles: ITilesState;
  readonly toasts: IToastsState;
}
