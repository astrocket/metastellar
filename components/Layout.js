import React from 'react';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';

const Layout = (props) => {
  return (
      <Container fluid={props.fluid}>
        <Head>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"/>
          <script
              src="/static/VirtualSky/jquery-1.10.0.min.js" type="text/javascript"/>
          <script src="/static/VirtualSky/virtualsky.js" type="text/javascript"/>
          <link rel="stylesheet" type="text/css" href="/static/react-s-alert/dist/s-alert-default.css"/>
          <link rel="stylesheet" type="text/css" href="/static/react-s-alert/dist/s-alert-css-effects/slide.css"/>
          <link rel="stylesheet" type="text/css" href="/static/css/application.css"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        {props.children}
      </Container>
  )
};

export {Layout};
