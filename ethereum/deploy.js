const HDWalletProvider = require('truffle-hdwallet-provider');
const compiledMetaStellar = require('./build/MetaStellar.json');
const path = require('path');
const fs = require('fs-extra');
const Web3 = require('web3');
const provider = new HDWalletProvider(
    'voyage slam leave gasp mansion armor ivory size throw visa blast weasel',
    'https://rinkeby.infura.io/1n7ngBVFQi37NC1sj4Rj'
);

const web3 = new Web3(provider);
const samplePath = path.resolve(__dirname, '../constellation.json');
const sampleStars = JSON.parse(fs.readFileSync(samplePath, 'utf8'));

const registerStar = async (star, deployer) => {
  const {name} = star.target;
  const {ra, dec} = star;
  const astroParams = [
      ra.decimal, dec.decimal, name, 'https://metadium.com/'
  ];
  const result = await new web3.eth.Contract(JSON.parse(compiledMetaStellar.interface))
      .methods.registerAstro(astroParams)
      .send({gas: '1000000', from: deployer});

  console.log(`Tx for ${name}`, result.options.address);
};

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const deployer = accounts[0];
  const initialParams = [deployer, web3.utils.toWei('0.01', 'ether')];
  const result = await new web3.eth.Contract(JSON.parse(compiledMetaStellar.interface))
      .deploy({data: compiledMetaStellar.bytecode, arguments: initialParams})
      .send({gas: '1000000', from: deployer});

  console.log('Contract deployed to', result.options.address);

  await sampleStars.map(async star => {
    await registerStar(star, deployer)
  });

  console.log('BigBang !');

};

deploy();
