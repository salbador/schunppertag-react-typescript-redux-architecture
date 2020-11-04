import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import MenuNavLink from './components/MenuNavLink';
import RouteEnum from '../../../constants/RouteEnum';
import GithubCorner from 'react-github-corner';

interface IProps {}

const MainNav: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <Segment inverted={true}>
      <Menu inverted={true} pointing={true} secondary={true}>
        <Menu.Item as={MenuNavLink} to={RouteEnum.Home} name="Home" />
        <Menu.Item as={MenuNavLink} to={RouteEnum.Tasks} name="Tasks" />
        <Menu.Item as={MenuNavLink} to={RouteEnum.Game} name="Game" />
        <Menu.Item as={MenuNavLink} to={RouteEnum.Errorsample} name="ErrorSample" />
      </Menu>
      <GithubCorner href="https://github.com/salbador/schunppertag-react-typescript-redux-architecture" />
    </Segment>
  );
};

export default MainNav;
