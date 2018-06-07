import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';

const AstroCard = ({astro, starImage, starUrl, starPrice}) => {

  return (
      <Card>
        <Image
            src={starImage}
            href={starUrl}
            as='a'
            target='_blank'
        />
        <Card.Content>
          <Card.Header>
            {`Star: ${astro.target.name}`}
          </Card.Header>
        </Card.Content>
      </Card>
  )
};

export {AstroCard};