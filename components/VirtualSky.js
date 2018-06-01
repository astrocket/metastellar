import React, {Component} from 'react';
import {Astro} from './index';
import {Dropdown, Header} from 'semantic-ui-react';
import LayoutHeader from './Header';
import searchBase from '../static/data/ko/search_base.json';
import virtualskyInitializer from '../static/data/initializer.json';
const formattedSearchBase = searchBase.map((star) => {
  return {
    key: star.target.name, value: star, text: star.target.name,
    content: <Header className={'ui header text search-result-bar'} icon={`${star.type==='star'?'empty ':''}star`} content={star.target.name} subheader={star.type_locale} />
  }
});

export default class VirtualSky extends Component {

  constructor() {
    super();
    this.state = {
      name: '/',
      modalOpen: false,
      currentAstro: {
        target: {name: 'Astro'},
        ra: {decimal: 0},
        dec: {decimal: 0}
      },
      currentMetaID: {
        name: '이한결',
        joined: '2018년 5월 부터 소유중',
        about: '코인플러그 개발자',
        image: 'https://apod.nasa.gov/apod/image/9612/sagan_uc.gif'
      }
    }
  }

  componentDidMount() {
    this.vs = $.virtualsky({
      id: 'starmap',
      lang: 'ko',
      objects: this.props.astros,
      ...virtualskyInitializer,
      onClickObject: (o) => this.openAstroModal(o),
    })
  }

  setName(name) {
    this.setState({ name });
    alert('MetaMask open');
  }

  objectTemplate(object) {
    return (
        <div class="container" key={object.target.name}>
          <a onClick={() => this.setName(object.target.name)} style="color: black; cursor: pointer;">hi</a>
        </div>
    );
  }

  sampleCallMetaMask() {
    var ether = $('#userEther').val();
    var address = "0x65cA73D13a2cc1dB6B92fd04eb4EBE4cEB70c5eC";
    var abi = [ { "constant": false, "inputs": [ { "name": "newString", "type": "string" } ], "name": "setString", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getString", "outputs": [ { "name": "", "type": "string", "value": "Hello World!" } ], "payable": false, "type": "function" } ];
    var contract = web3.eth.contract(abi);
    var stringHolder = contract.at(address);
    stringHolder.getString(console.log);
    stringHolder.setString('Sending' + ether + 'ETH' , console.log)
  }

  moveTo(star) {
    var self=this;
    setTimeout(function(){
      self.vs.panTo(star.ra.decimal, star.dec.decimal,500);
    }, 10);
  }

  openAstroModal(object) {
    this.setState({currentAstro: object}, () => {
      this.handleOpen()
    })
  };

  handleOpen() {
    this.setState({ modalOpen: true })
  }
  handleClose() {
    this.setState({ modalOpen: false })
  }

  render() {
    return (
        <div>
          <div id={"starmap"} style={styles.container}></div>
          <LayoutHeader>
            <Dropdown
                placeholder='Search Star by name.'
                fluid selection search
                options={formattedSearchBase}
                onChange={(e, { value }) => this.moveTo(value)}
            />
          </LayoutHeader>
          <Astro
              astro={this.state.currentAstro}
              modalOpen={this.state.modalOpen}
              handleOpen={() => this.handleOpen()}
              handleClose={() => this.handleClose()}
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
