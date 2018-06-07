const assert = require('assert');
const ganache = require('ganache-cli');
const path = require('path');
const fs = require('fs-extra');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const BigNumber = require('bignumber.js');

const compiledMetaStellar = require('../ethereum/build/MetaStellar.json');
const samplePath = path.resolve(__dirname, '../static/data/star_seed.json');
const sampleStars = JSON.parse(fs.readFileSync(samplePath, 'utf8'));

let accounts;
let metaStellar;
let deployerInfo;
let initialParams;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  deployerInfo = {gas: '4000000', from: accounts[0], gasPrice: '5'};
  initialParams = [accounts[0], web3.utils.toWei('0.01', 'ether')];

  metaStellar = await new web3.eth.Contract(JSON.parse(compiledMetaStellar.interface))
      .deploy({ data: compiledMetaStellar.bytecode, arguments: initialParams })
      .send(deployerInfo);
  console.log('current gas : ', await web3.eth.getBalance(accounts[0]));
});

describe('MetaStellar', () => {
  it('deployed a metaStellar contract', () => {
    assert.ok(metaStellar.options.address);
  });

  it('marked creator as the cosmos in MetaStellar', async () => {
    const cosmos = await metaStellar.methods.cosmos().call();
    assert.equal(accounts[0], cosmos);
  });

  it('assure astro is successfully deployed', async () => {
    const beforeId = await metaStellar.methods.lastId().call();
    const {ra, dec, target} = sampleStars[0];
    await metaStellar.methods.registerAstro(ra.decimal * 1000, dec.decimal * 1000, target.name).send(deployerInfo);
    const deployedStar = await metaStellar.methods.getAstro(beforeId + 1).call();
    const afterId = await metaStellar.methods.lastId().call();

    assert.equal(parseInt(beforeId) + 1, afterId);
    assert.equal(target.name, deployedStar.name);
  }).timeout(150000);

  it('assure multiple astros are successfully deployed', async () => {
    await Promise.all(sampleStars.map(async (star, index) => {
      const {ra, dec, target} = star;

      await metaStellar.methods.registerAstro(ra.decimal * 1000, dec.decimal * 1000, target.name).send(deployerInfo)
          .then(() => console.log(index));
      const deployedStar = await metaStellar.methods.getAstro(index + 1).call();

      assert.equal(target.name, deployedStar.name);
    }));

    console.log('final gas : ', await web3.eth.getBalance(accounts[0]));
  }).timeout(150000);

});
