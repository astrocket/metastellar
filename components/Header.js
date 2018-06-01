import React from 'react';
import {Menu} from 'semantic-ui-react';

export default (props) => {
  return (
      <Menu inverted style={{margin: '10px'}} className={'meta-header ui menu'}>
        <Menu.Item>
          MetaStellar
        </Menu.Item>
        {props.children}
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
