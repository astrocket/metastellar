import React from 'react';
import {Menu} from 'semantic-ui-react';

export default () => {
  return (
      <Menu style={{margin: '10px'}} class={'meta-header ui menu'}>
        <Menu.Item>
          MetaStellar
        </Menu.Item>
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
