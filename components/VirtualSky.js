import React, {Component} from 'react';
import {Astro} from './index';
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
    this.$sky = $(this.sky);

    this.vs = $.virtualsky({
      id: 'starmap',
      projection: 'stereo',
      credit: false,
      constellations: true,
      constellationlabels: true,
      showorbits: false,
      showgalaxy: false,
      showStars: true,
      showstarlabels: true,
      objects: this.props.astros,
      onClickObject: (o) => this.openAstroModal(o),
    });
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

  moveTo() {
    console.log(this.vs);
    this.vs.toggleNegative();
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
        <div ref={sky => this.sky = sky}>
          <div id={"starmap"} style={styles.container}></div>
          <Astro
              astro={this.state.currentAstro}
              modalOpen={this.state.modalOpen}
              handleOpen={() => this.handleOpen()}
              handleClose={() => this.handleClose()}
              metaID={this.state.currentMetaID}
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
