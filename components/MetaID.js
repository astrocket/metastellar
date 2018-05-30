import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';

const MetaID = ({metaID}) => {
  const { name, joined, about, image } = metaID;

  return (
      <Card>
        <Image src={image} />
        <Card.Content>
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Meta>
        <span className='date'>
          {joined}
        </span>
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