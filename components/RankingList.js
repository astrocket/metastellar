import React from 'react';

const RankingList = (props) => {
    
  return (
      <ol style={{display: 'flex'}}>
          {props.rankers.slice(0, 5).map((ranker, index) => {
              const { ranking_hashes } = props;
              return (
                <li key={index} style={{marginRight: '30px'}}><a href={`/user?address=${ranker}`} target={'_blank'}>{`${ranker.substring(0,8)}...${'\n'}(Has ${ranking_hashes[ranker]} Stars)`}</a></li>
              );
        })}
      </ol>
  )
};

export {RankingList};
