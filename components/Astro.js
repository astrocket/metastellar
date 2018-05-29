import React from 'react';

const Astro = (props) => {
  const {target, ra, dec} = props.astro;
  return (
      <div>
        <h3>{target.name}</h3>
        <p>Ra :{ra.decimal}, {ra.h}, {ra.m}, {ra.s}</p>
        <br/>
        <p>Dec :{dec.decimal}, {dec.h}, {dec.m}, {dec.s}</p>
        <hr/>
      </div>
  )
};

export {Astro};
