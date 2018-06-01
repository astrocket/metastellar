import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';

const MetaID = ({metaID, starImage, starUrl}) => {
  const { name, owner } = metaID;

  return (
      <Card>
        <Image
            src={starImage}
            href={starUrl}
            as='a'
            target='_blank'
        />
        <Card.Content>
          <Image floated='right' size='mini' src={'https://apod.nasa.gov/apod/image/9612/sagan_uc.gif'} />
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Meta>
            {'email info from metaid'}
          </Card.Meta>
          <Card.Description>
            {'phone number from metaid'}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={`https://ropsten.etherscan.io/address/${owner}`} target={'_blank'}>
            <Icon name='star' />
            Owner's ether address.
          </a>
        </Card.Content>
      </Card>
  )
};

export {MetaID};