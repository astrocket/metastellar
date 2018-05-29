import React from 'react';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

const Layout = (props) => {
  return (
      <Container fluid>
        <Head>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"/>
          <script
              src="/static/VirtualSky/jquery-1.10.0.min.js" type="text/javascript"/>
          <script src="/static/VirtualSky/virtualsky.js" type="text/javascript"/>
          <link rel="stylesheet" type="text/css" href="/static/css/application.css"/>
        </Head>
        {props.children}
        <Header/>
      </Container>
  )
};

export {Layout};
