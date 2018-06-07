import React from 'react';
import {Menu, Sticky} from 'semantic-ui-react';

export default (props) => {
  return (
      <Sticky style={{zIndex: 9999, position: 'relative'}} offset={10} >
        <Menu className={'meta-header ui menu'} style={{width: '90vw', margin: '0 5vw'}}>
        <Menu.Item>
          <a href="/">MetaStellar</a>
        </Menu.Item>
        <Menu.Item>
          {props.children}
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
      </Sticky>
  )
}
