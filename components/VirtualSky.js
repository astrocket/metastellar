import React, {Component} from 'react';

export default class VirtualSky extends Component {

  constructor() {
    super();
    this.state = {
      name: '/'
    }
  }

  componentDidMount() {
    $.virtualsky({
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
      onClickObject: (o) => this.setName(o.target.name),
    });
  }

  setName(name) {
    this.setState({ name });
    alert('MetaMask open');
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
    this.planetarium.panTo(56.8690917,24.1053111,3000);
  }

  render() {
    return (
        <div>
          <div ref={sky => this.sky = sky} id={"starmap"} style={styles.container}></div>
          <h1>{this.props.mapShow ?
            'True' : 'False'
          }</h1>
          <h3>{this.state.name}</h3>
          <button onClick={() => this.moveTo()}>이동</button>
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
