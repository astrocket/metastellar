import React from 'react';
import {Menu, Dropdown} from 'semantic-ui-react';
import sampleAstros from '../constellation.json';
const formattedAstros = sampleAstros.map((star) => {
  return { key: star.target.name, value: star.target.name, text: star.target.name }
});

export default () => {
  return (
      <Menu inverted style={{margin: '10px'}} class={'meta-header ui menu'}>
        <Menu.Item>
          MetaStellar
        </Menu.Item>
        <Dropdown placeholder='Search Star by name.' fluid multiple search selection options={formattedAstros} />

        <Menu.Menu position="right">
          <Menu.Item>
            Constellation
          </Menu.Item>
          <Menu.Item>
            +
          </Menu.Item>
        </Menu.Menu>
      </Menu>
  )
}
