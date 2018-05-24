const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledMetaStellar = require('../ethereum/build/MetaStellar.json');

let accounts;
let space;
let spaceAddress;
let metaStellar;
let deployerInfo;
let initialParams;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  deployerInfo = {gas: '1000000', from: accounts[0]};
  initialParams = [deployerInfo, web3.utils.toWei('0.01', 'ether')];

  metaStellar = await new web3.eth.Contract(JSON.parse(compiledMetaStellar.interface))
      .deploy({ data: compiledMetaStellar.bytecode, arguments: initialParams })
      .send(deployerInfo);

  await
});
