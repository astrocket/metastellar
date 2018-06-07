import React, { Component } from 'react';
import metaStellar from '../ethereum/metaStellar.js';
import web3 from '../ethereum/web3.js';
import {BigNumber} from 'bignumber.js';
import {Layout, Astro, Constellation} from '../components/index';
import sampleAstros from '../static/data/star_seed.json';
import VirtualSky from '../components/VirtualSky';
import Alert from 'react-s-alert';

class MetaStellarIndex extends Component {
  static async getInitialProps() {
    const astros = await metaStellar.methods.lastId().call()
        .then(async (res) => {
          const minimumPrice = await metaStellar.methods.minimumPrice().call();
          const starIDs = Array.from(Array(parseInt(res))).map((e,i)=>i+1);

          return await Promise.all(starIDs.map(async (id) => {
            const rawAstro = await metaStellar.methods.getAstro(id).call();
            const lastBid = await new BigNumber(parseInt(rawAstro.lastBid));
            const minBidTic = await new BigNumber(parseInt(minimumPrice));
            const currentBid = await lastBid.plus(minBidTic);

            return {
              id: parseInt(rawAstro.id),
              target: {name: rawAstro.name},
              ra: {decimal: rawAstro.raDecimal / 1000},
              dec: {decimal: rawAstro.decDecimal / 1000},
              metaID: {
                name: rawAstro.metaIDName,
                owner: rawAstro.metaIDOwner,
                sns: rawAstro.metaIDSns
              },
              lastBid: lastBid,
              minBidTic: minBidTic,
              currentBid: currentBid
            }
          }));
        });

    const ranking_hashes = {};
    astros.forEach(function(astro) { 
      var x = astro.metaID.owner;
      ranking_hashes[x] = (ranking_hashes[x] || 0)+1; 
    });
    const rankers = Object.keys(ranking_hashes).sort(function(a,b){return ranking_hashes[b]-ranking_hashes[a]})
    return {
      astros: astros,
      rankers: rankers
    };
  }

  constructor() {
    super();
    this.state = {
      loading: false,
      currentUser: null
    }
  }

  componentDidMount() {
    if (!(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')) {
      Alert.info('<h4>Metamask not available.</h4><ul><li><a href="https://metamask.io/" target="_blank">Get Metamask now.</a></li></ul>', {
        position: 'top-right',
        effect: 'slide',
        html: true,
        timeout: 5000
      });
    } else {
      web3.eth.net.getNetworkType()
          .then((network) => {
            if (network !== 'ropsten') {
              Alert.info('<h4>You are not in a ropsten network.</h4><ul><li><a href="https://metamask.io/" target="_blank">Open Metamask and change your network to ropsten.</a></li></ul>', {
                position: 'top-right',
                effect: 'slide',
                html: true,
                timeout: 5000
              });
            }
          });
    }
    console.log(this.props.ranking);
  }

  render() {
    return(
        <Layout fluid>
          <VirtualSky astros={this.props.astros} rankers={this.props.rankers} />
          <Alert stack={{limit: 3}} />
        </Layout>
    )
  }
}

export default MetaStellarIndex;
