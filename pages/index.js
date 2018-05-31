import React, { Component } from 'react';
import metaStellar from '../ethereum/metaStellar.js';
import {Layout, Astro, Constellation} from '../components/index';
import sampleAstros from '../constellation.json';
import VirtualSky from '../components/VirtualSky';

class MetaStellarIndex extends Component {
  static async getInitialProps() {
    const lastId = await metaStellar.methods.lastId().call();

    const astros = await metaStellar.methods.lastId().call()
        .then(async (res) => {
          const starIndexes = Array.from(Array(res.lastId)).map((e,i)=>i+1);
          // 여기가 뭔가 순차처리가 안된다....
          return await Promise.all(starIndexes.map(async (id) => {
            const rawAstro = await metaStellar.methods.getAstro(id).call();
            return {
              target: {name: rawAstro.name},
              ra: {decimal: rawAstro.raDecimal / 1000},
              dec: {decimal: rawAstro.decDecimal / 1000}
            }
          }));
        });
    return {
      astros: astros,
      lastId: lastId
    };
  }

  constructor() {
    super();
    this.state = {
      mapShow: true,
      loading: false
    }
  }

  componentDidMount() {
    console.log(this.props.lastId, this.props.astros);
  }

  testClick() {
    this.setState({
      mapShow: !this.state.mapShow
    })
  }

  render() {
    return(
        <Layout>
          <VirtualSky astros={this.props.astros} mapShow={this.state.mapShow} />
        </Layout>
    )
  }
}

export default MetaStellarIndex;
