const assert = require('assert');
const ganache = require('ganache-cli');
const path = require('path');
const fs = require('fs-extra');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledMetaStellar = require('../ethereum/build/MetaStellar.json');
const samplePath = path.resolve(__dirname, '../constellation.json');
const sampleStars = JSON.parse(fs.readFileSync(samplePath, 'utf8'));

let accounts;
let metaStellar;
let deployerInfo;
let initialParams;
let deployedConstellation;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
  console.log(await web3.eth.getBalance(accounts[0]));
  deployerInfo = {gas: '4000000', from: accounts[0], gasPrice: '5'};
  initialParams = [accounts[0], web3.utils.toWei('0.01', 'ether')];

  metaStellar = await new web3.eth.Contract(JSON.parse(compiledMetaStellar.interface))
      .deploy({ data: compiledMetaStellar.bytecode, arguments: initialParams })
      .send(deployerInfo);
  console.log(await web3.eth.getBalance(accounts[0]));
  await sampleStars.map(async star => {
    const {name} = star.target;
    const {ra, dec} = star;

    await metaStellar.methods
        .registerAstro(ra.decimal, ra.h, ra.m, ra.s, dec.decimal, dec.d, dec.m, dec.s, name, 'https://www.naver.com')
        .send(deployerInfo);
  });
});

describe('MetaStellar', () => {
  it('deployed a metaStellar contract', () => {
    assert.ok(metaStellar.options.address);
  });

  it('marked creator as the cosmos in MetaStellar', async () => {
    const cosmos = await metaStellar.methods.cosmos().call();
    assert.equal(accounts[0], cosmos);
  });

  it('assure every astros are successfully deployed', async () => {
    const lastId = await metaStellar.methods.lastId.call();

    await sampleStars.map(async (star, index) => {
      const deployedStar = await metaStellar.methods.getAstro(index + 1).call();
      console.log(deployedStar);
      //assert.equal(star, deployedStar)
    });

    console.log(deployedConstellation);
  });
});
