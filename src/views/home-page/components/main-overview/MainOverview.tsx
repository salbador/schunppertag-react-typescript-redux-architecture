import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IStore from '../../../../models/IStore';
import { Item } from 'semantic-ui-react';
import TileModel from '../../../../stores/tiles/models/tiles/TileModel';
import * as TilesAction from '../../../../stores/tiles/TilesAction';
import { Dispatch } from 'redux';

interface IProps {}

const MainOverview: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(TilesAction.requestTile());
  }, [dispatch]);

  const tile: TileModel | null = useSelector((state: IStore) => state.tiles.tile);

  if (!tile) {
    return null;
  }

  const image: string = tile?.image?.medium ?? '';
  const network: string = tile?.network?.name ?? '';

  return (
    <Item.Group>
      <Item>
        <Item.Image src={image} />
        <Item.Content>
          <Item.Header as="a">{tile.name}</Item.Header>
          <Item.Meta>{network}</Item.Meta>
          <Item.Description>
            <div dangerouslySetInnerHTML={{ __html: tile.summary }} />
          </Item.Description>
          <Item.Extra>{tile.genres.join(' | ')}</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default MainOverview;
