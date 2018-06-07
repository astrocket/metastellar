import React from 'react';
import {Card, Image, Icon, Grid, Segment} from 'semantic-ui-react';
import {AstroCard} from './index.js';


const AstroList = (props) => {
    
  return (
      <Grid stackable columns={6} style={{marginTop: '20px'}}>
          {props.astros.map((astro) => {
              return (
                <Grid.Column key={astro.id}>
                    <Segment>
                        <AstroCard
                            astro={astro}
                            starImage={`http://server7.sky-map.org/imgcut?survey=DSS2&w=128&h=128&ra=${astro.ra.decimal}&de=${astro.dec.decimal}&angle=1.25&output=PNG`}
                            starUrl={`http://server1.wikisky.org/v2?ra="+(${astro.ra.decimal}/15)+"&de="+(${astro.dec.decimal})+"&zoom=6&img_source=DSS2`}
                            starPrice={astro.lastBid}
                        />
                    </Segment>
                </Grid.Column>
              );
        })}
      </Grid>
  )
};

export {AstroList};