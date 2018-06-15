const HDWalletProvider = require('truffle-hdwallet-provider');
const compiledMetaStellar = require('./build/MetaStellar.json');
const path = require('path');
const fs = require('fs-extra');
const Web3 = require('web3');

const samplePath = path.resolve(__dirname, '../static/data/star_seed.json');
const sampleStars = JSON.parse(fs.readFileSync(samplePath, 'utf8'));
const credentialsPath = path.resolve(__dirname, '../static/data/credentials.json');
const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

let deployedMetaStellar;
let web3;
let network = 'ropsten';
let http_api = `https://${network}.infura.io/${credentials.infura_key}`;
let deployContract = false;

const setEnv = async () => {
  process.argv.slice(2).forEach(function (val, index, array) {
    if (val.split('=')[0] === 'network') {
      network = val.split('=')[1];
      if (val.split('=')[1] === 'metadium') {
        http_api = credentials.metadium_api;
      }
    }
    if (val === 'contract') {
      deployContract = true;
    }
  });

  const provider = new HDWalletProvider(
    credentials['mneumonics'][network],
    http_api)
  web3 = new Web3(provider);
}

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const deployer = accounts[0];
  const deployerInfo = {gas: '4000000', from: deployer, gasPrice: '4000000000'};
  console.log('Attempting to deploy from account : ', deployer);
  console.log('current gas : ', web3.utils.fromWei(await web3.eth.getBalance(accounts[0]), 'ether'));

  console.log(compiledMetaStellar.bytecode);

  const initialParams = [deployer, web3.utils.toWei('0.001', 'ether')];

  deployedMetaStellar = await new web3.eth.Contract(JSON.parse(compiledMetaStellar.interface))
      .deploy({data: compiledMetaStellar.bytecode, arguments: initialParams})
      .send(deployerInfo);

  console.log(`Contract deployed to ${network} network : `, deployedMetaStellar.options.address);
};

const bigbang = async () => {
  const accounts = await web3.eth.getAccounts();
  const deployer = accounts[0];
  const deployerInfo = {gas: '4000000', from: deployer, gasPrice: '4000000000'};

  if (!deployContract) {
    deployedMetaStellar = await new web3.eth.Contract(
      JSON.parse(compiledMetaStellar.interface),
      credentials[network]
    );
  }

  var idx = await deployedMetaStellar.methods.lastId().call();

  var callReg = function () {
    if (idx < sampleStars.length) {
      var star = sampleStars[idx];
      idx++;
      deployedMetaStellar.methods.registerAstro(star.ra.decimal * 1000, star.dec.decimal * 1000, star.target.name).send(deployerInfo).then(function() {
        setTimeout(function() { callReg(); }, 10);
      });
      console.log(`Star name, ${star.target.name} deployed`);
    } else {
      console.log('All deployed !!!');
    }
  };

  callReg();
};

setEnv();
if (deployContract) {
  deploy();
}
bigbang();