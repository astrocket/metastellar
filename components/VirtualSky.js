import React, {Component} from 'react';
import metaStellar from '../ethereum/metaStellar.js';
import web3 from '../ethereum/web3';
import { BigNumber } from 'bignumber.js'
import {Astro, RankingList} from './index.js';
import {Dropdown, Header} from 'semantic-ui-react';
import LayoutHeader from './Header';
import searchBase from '../static/data/ko/search_base.json';
import virtualskyInitializer from '../static/data/initializer.json';
import Alert from 'react-s-alert';

export default class VirtualSky extends Component {

  constructor() {
    super();
    this.state = {
      name: '/',
      modalOpen: false,
      currentAstro: {
        target: {name: 'Astro'}, ra: {decimal: 0}, dec: {decimal: 0}, currentBid: '0', minBidTic: '0', lastBid: '0'
      },
      currentMetaID: {
        name: '이한결', joined: '2018년 5월 부터 소유중', about: '코인플러그 개발자', image: 'https://apod.nasa.gov/apod/image/9612/sagan_uc.gif'
      },
      formattedSearchBase: [],
      formLoading: false,
      message: null,
      messageUrl: null
    }
  }

  componentDidMount() {
    this.vs = $.virtualsky({
      id: 'starmap',
      lang: 'ko',
      objects: this.props.astros,
      ...virtualskyInitializer,
      onClickObject: (o) => this.openAstroModal(o),
    });
    const fsb = searchBase.map((star) => {
      return {
        key: star.target.name, value: star, text: star.target.name,
        content: <Header className={'ui header text search-result-bar'} icon={`${star.type==='star'?'empty ':''}star`}
                         content={star.target.name} subheader={star.type_locale} />
      }
    });
    this.setState({formattedSearchBase: fsb});
  }

  async checkNetwork() {
    let network = true;
    if (!(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')) {
      Alert.info('<h4>Metamask not available.</h4><ul><li><a href="https://metamask.io/" target="_blank">Get Metamask now.</a></li></ul>', {
        position: 'top-right',
        effect: 'slide',
        html: true,
        timeout: 5000
      });
      network = false;
    } else {
      await web3.eth.net.getNetworkType()
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
      network =false
    }
    return network;
  }

  invalidForm(name, sns) {
    let invalid = false;
    if (name === '' || sns === '') {
      Alert.info(`<h4>${name === ''?'Name field ':''} ${sns === ''?'SNS field ':''}not given.</h4>`, {
        position: 'top-right',
        effect: 'slide',
        html: true,
        timeout: 5000
      });
      invalid = true;
    }
    return invalid;
  }

  async onPressBuy(bid, name, sns) {
    if (await this.checkNetwork() || this.invalidForm(name, sns)) {
      return false;
    }
    const { id } = this.state.currentAstro;
    const accounts = await web3.eth.getAccounts();

    this.setState({formLoading: true}, async () => {
      await metaStellar.methods.buyAstro(id, name, sns).send({from: accounts[0], value: web3.utils.toWei(bid, 'ether'), gasPrice: '1'})
          .on('transactionHash', (hash) => {
            this.setState({ message: `Tx Made. (click for etherscan)`, messageUrl: `https://ropsten.etherscan.io/tx/${hash}`, formLoading: false })
          }).on('confirmation', (confirmationNumber, receipt) => {
            this.setState({ message: `Transaction Confirmed. (blk:${confirmationNumber})`, messageUrl: `https://ropsten.etherscan.io/tx/${hash}`, formLoading: false })
          }).on('error', (error) => {
            Alert.info(`<h4>${error.message}</h4><ul><li><a href="https://ethgasstation.info" target="_blank">ETH gas station</a></li></ul>`, {
              position: 'top-right',
              effect: 'slide',
              html: true,
              timeout: 5000
            });
            this.setState({ formLoading: false});
          });
    });
  };

  moveTo(star) {
    var self=this;
    setTimeout(function(){
      self.vs.panTo(star.ra.decimal, star.dec.decimal, 500);
    }, 10);
  };

  openAstroModal(object) {
    this.setState({currentAstro: object, message: null, messageUrl: null}, () => {
      this.handleOpen()
    })
  };

  handleOpen() {this.setState({ modalOpen: true })};
  handleClose() {this.setState({ modalOpen: false })};
  upBid() {this.setState({currentAstro: {...this.state.currentAstro, currentBid: this.state.currentAstro.currentBid + 0.1} })};
  downBid() {this.setState({currentAstro: {...this.state.currentAstro, currentBid: this.state.currentAstro.currentBid - 0.1} })};

  render() {
    return (
        <div>
          <LayoutHeader>
            <Dropdown
                placeholder='Search Star by name.'
                fluid selection search
                options={this.state.formattedSearchBase}
                onChange={(e, { value }) => this.moveTo(value)}
            />
            <RankingList rankers={this.props.rankers} />
          </LayoutHeader>
          <div id={"starmap"} style={styles.container}></div>
          <Astro
              astro={this.state.currentAstro}
              message={this.state.message}
              messageUrl={this.state.messageUrl}
              modalOpen={this.state.modalOpen}
              handleClose={() => this.handleClose()}
              upBid={() => this.upBid()}
              downBid={() => this.downBid()}
              formLoading={this.state.formLoading}
              onPressBuy={(bid, name, sns) => this.onPressBuy(bid, name, sns)}
          />
        </div>
    );
  }

}

const styles = {
  container: {
    height: '100vh',
    width: '100%'
  }
};
