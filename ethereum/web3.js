import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider) // metamask available
} else {
  const provider = new Web3.providers.HttpProvider(
      'https://ropsten.infura.io/1n7ngBVFQi37NC1sj4Rj'
  );
  web3 = new Web3(provider);
}

export default web3;
