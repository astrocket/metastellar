import React, { Component } from 'react';
import cosmos from '../ethereum/metaStellar';
import {Layout, Astro, Constellation} from '../components/index';
import sampleAstros from '../constellation.json';
import VirtualSky from '../components/VirtualSky';

class MetaStellarIndex extends Component {
/*  static async getInitialProps() {
    const astros = await cosmos.methods.getDeployedAstros().call();
    return { astros };
  }*/

  constructor() {
    super();
    this.state = {
      astros: sampleAstros,
      mapShow: true
    }
  }

  testClick() {
    this.setState({
      mapShow: !this.state.mapShow
    })
  }

  render() {
    return(
        <Layout>
          <VirtualSky astros={this.state.astros} mapShow={this.state.mapShow} />
        </Layout>
    )
  }
}

export default MetaStellarIndex;
