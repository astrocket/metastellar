import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';

const MetaID = ({metaID, starImage, starUrl, starPrice}) => {
  const { name, owner, sns } = metaID;

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
            {`${name}'s`} <a href={`/user?address=${owner}`} target={'_blank'}>space</a>
          </Card.Header>
          <Card.Meta>
            {`I paid ${starPrice} ETH for this.`}
          </Card.Meta>
          <Card.Description>
            <a href={`https://${sns}`} target={'_blank'}>{sns}</a>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={`https://ropsten.etherscan.io/address/${owner}`} target={'_blank'}>
            Address
          </a>
        </Card.Content>
      </Card>
  )
};

export {MetaID};