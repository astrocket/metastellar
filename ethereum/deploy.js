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
const samplePath = path.resolve(__dirname, '../constellation.json');
const sampleStars = JSON.parse(fs.readFileSync(samplePath, 'utf8'));
let metaStellar;

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const deployer = accounts[0];
  console.log('Attempting to deploy from account : ', deployer);
  console.log('current gas : ', web3.utils.fromWei(await web3.eth.getBalance(accounts[0]), 'ether'));

  metaStellar = await new web3.eth.Contract(JSON.parse(compiledMetaStellar.interface))
      .deploy({data: compiledMetaStellar.bytecode, arguments: [deployer, 1000000000000000]})
      .send({gas: 4000000, from: deployer, gasPrice: '4000000000'});

  console.log('Contract deployed to', metaStellar.options.address);

/*  await Promise.all(sampleStars.map(async (star, index) => {
    const {ra, dec, target} = star;
    await new metaStellar.methods.registerAstro(ra.decimal, dec.decimal, target.name, 'https://metadium.com/').send({gas: 4000000, from: deployer})
        .then(() => console.log(index));
  }));*/

  console.log('BigBang !');

};

deploy();
