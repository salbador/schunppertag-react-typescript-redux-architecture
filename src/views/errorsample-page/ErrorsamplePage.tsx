import styles from './ErrorsamplePage.module.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IStore from '../../models/IStore';
import { selectErrorText } from '../../selectors/error/ErrorSelector';
import * as TilesAction from '../../stores/tiles/TilesAction';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';
import { Header, Message, Container } from 'semantic-ui-react';
import { Dispatch } from 'redux';

interface IProps {}

const ErrorsamplePage: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(TilesAction.requestError());
  }, [dispatch]);

  const isRequesting: boolean = useSelector((state: IStore) => selectRequesting(state, [TilesAction.REQUEST_ERROR]));
  const requestErrorText: string = useSelector((state: IStore) => selectErrorText(state, [TilesAction.REQUEST_ERROR_FINISHED]));

  return (
    <div className={styles.wrapper}>
      <Header as="h2">Errorsample</Header>
      <LoadingIndicator isActive={isRequesting}>
        <Container>
          <p>
            This page is only to tile how to handle API errors on the page. You will also notice a popup indicator with the actual error text. Below
            we create a custom error message.
          </p>
        </Container>
        {requestErrorText && <Message info={true} header="Error" content="Sorry there was an error requesting this content." />}
      </LoadingIndicator>
    </div>
  );
};

export default ErrorsamplePage;
