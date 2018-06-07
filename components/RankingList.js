import React from 'react';

const RankingList = (props) => {
    
  return (
      <ol stackable>
          {props.rankers.slice(0, 3).map((ranker) => {
              return (
                <li><a href={`/user?address=${ranker}`} target={'_blank'}>{ranker}</a></li>
              );
        })}
      </ol>
  )
};

export {RankingList};