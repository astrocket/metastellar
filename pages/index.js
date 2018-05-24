import React, { Component } from 'react';
import cosmos from '../ethereum/metaStellar';
import Layout from '../components/Layout';

class MetaStellarIndex extends Component {
  static async getInitialProps() {
    const astros = await cosmos.methods.getDeployedAstros().call();
    return { astros };
  }

  renderAstros() {
    const astros = this.props.astros.map(astro => {
      return <Astro astro={astro}/>;
    });

    return <Constellation astros={astros} />
  }

  render() {
    return(
        <Layout>
          <div>
            <h1>MetaStellar</h1>
            <p>{this.props.astros}</p>
          </div>
        </Layout>
    )
  }
}

export default MetaStellarIndex;
