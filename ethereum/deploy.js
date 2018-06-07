const HDWalletProvider = require('truffle-hdwallet-provider');
const compiledMetaStellar = require('./build/MetaStellar.json');
const path = require('path');
const fs = require('fs-extra');
const Web3 = require('web3');
const provider = new HDWalletProvider(
    'hero coil cattle wait antique else wall any chef reason man fatigue',
    'https://ropsten.infura.io/1n7ngBVFQi37NC1sj4Rj'
);

const web3 = new Web3(provider);
const samplePath = path.resolve(__dirname, '../static/data/star_seed.json');
const sampleStars = JSON.parse(fs.readFileSync(samplePath, 'utf8'));
const dappAddressPath = path.resolve(__dirname, '../static/data/dappAddress.json');
const dappAddress = JSON.parse(fs.readFileSync(dappAddressPath, 'utf8'));

let metaStellar;
let deployedMetaStellar;

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const deployer = accounts[0];
  const deployerInfo = {gas: '4000000', from: deployer, gasPrice: '4000000000'};
  console.log('Attempting to deploy from account : ', deployer);
  console.log('current gas : ', web3.utils.fromWei(await web3.eth.getBalance(accounts[0]), 'ether'));

  console.log(compiledMetaStellar.bytecode);

  const initialParams = [deployer, web3.utils.toWei('0.001', 'ether')];

  metaStellar = await new web3.eth.Contract(JSON.parse(compiledMetaStellar.interface))
      .deploy({data: compiledMetaStellar.bytecode, arguments: initialParams})
      .send(deployerInfo);

  console.log('Contract deployed to', metaStellar.options.address);

};

const bigbang = async () => {
  const accounts = await web3.eth.getAccounts();
  const deployer = accounts[0];
  const deployerInfo = {gas: '4000000', from: deployer, gasPrice: '4000000000'};

  deployedMetaStellar = await new web3.eth.Contract(
      JSON.parse(compiledMetaStellar.interface),
      dappAddress.ropsten
  );

  var idx = await deployedMetaStellar.methods.lastId().call();

  var callReg = function () {
    if (idx < sampleStars.length) {
      var star = sampleStars[idx];
      idx++;
      console.log(idx);
      deployedMetaStellar.methods.registerAstro(star.ra.decimal * 1000, star.dec.decimal * 1000, star.target.name).send(deployerInfo).then(function() {
        setTimeout(function() { callReg(); }, 10);
      });
    } else {
      console.log('done');
    }
  };

  callReg();

};

//deploy();
bigbang();