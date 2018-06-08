import React from 'react';

const RankingList = (props) => {
    
  return (
      <ol style={{display: 'flex'}}>
          {props.rankers.slice(0, 3).map((ranker, index) => {
              return (
                <li key={index} style={{marginRight: '30px'}}><a href={`/user?address=${ranker}`} target={'_blank'}>{`${ranker.substring(0,8)}...`}</a></li>
              );
        })}
      </ol>
  )
};

export {RankingList};