import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';

const MetaID = ({metaID, starImage, starUrl}) => {
  const { name, joined, about, image } = metaID;

  return (
      <Card>
        <Image
            src={starImage}
            href={starUrl}
            as='a'
            target='_blank'
        />
        <Card.Content>
          <Image floated='right' size='mini' src={image} />
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Meta>
            {joined}
          </Card.Meta>
          <Card.Description>
            {about}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='star' />
            Currently owns 4 stars.
          </a>
        </Card.Content>
      </Card>
  )
};

export {MetaID};