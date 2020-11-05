import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import BoardModel from '../../../../../../stores/tiles/models/board/BoardModel';

interface IProps {
  readonly cardData: BoardModel;
}

const HighscoreCard: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { cardData } = props;
  const image: string = cardData?.character?.image?.medium;
  const missingImage: string = 'https://react.semantic-ui.com/images/wireframe/image.png';

  return (
    <Card key={cardData.person.name}>
      <Card.Content>
        <Image floated="right" size="mini" src={image || missingImage} />
        <Card.Header>{cardData.person.name}</Card.Header>
        <Card.Meta>as {cardData.character.name}</Card.Meta>
        <Card.Header>with {cardData.person.score}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default HighscoreCard;
