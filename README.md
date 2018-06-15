## Metastellar project.

Constellation market on Ethereum & Metadium Blockchain for Metadium demo App purpose.

#### Getting Started

##### Install package dependencies

```bash
$ npm install
```
##### Regenerate star base for deploy.

```ruby
$ cd metastellar
$ ruby generate_star_seeds.rb
"Constellation Generated."
# for test purpose -> generate 5 stars only
$ ruby generate_star_seeds.rb -test
"Test Constellation Generated."
```
##### Generate search base for constellation search.
```bash
$ cd metastellar
$ ruby generate_search_seeds.rb
```
##### Compile smart contract. (in case you updated MetaStellar.sol)
```bash
cd ethereum
node compile.js
# generates ethereum/build/MetaStellar.json
```
##### Figuring ethereum enviroment
> static/data/credentials.json
You can set your basic credentials here.
##### Deploying smart contract & star bases.
```bash
$ cd ethereum
# deploy contract & stars to mainnet through infura
$ node deploy.js network=mainnet contract
# deploy stars only to rinkeby through infura
$ node deploy.js network=rinkeby
# deploy stars only to metadium through metadium_api
$ node deploy.js network=metadium
# deploy stars only to ropsten through infura
$ node deploy.js
```
##### Test Solidity Smart Contract
```bash
npm run test
```
##### Run application in local environment
```bash
$ npm run dev
// check from: localhost: 3000
```
##### Deploy
pull down the latest repository from bitbucket.
> SSH info
```bash
Host metadium
HostName 13.125.251.87
User ubuntu
IdentityFile ~/.ssh/cp_blockchain.pem
```
> Deploy procedure
```bash
cd metastellar
sudo service nginx restart
npm run build
pm2 start npm -- start
```
[참고](https://medium.com/@sscaff1/nextjs-from-npm-init-to-production-c9f543169bfb)


#### Technical specs.

1. React for Front-end application.
2. Semantic UI for UI framework.
3. Next.js for routing & server-side rendering.
4. [VirtualSky](https://github.com/slowe/VirtualSky) for constellation draw.
5. Solidity for Ethereum smart contract.
6. Mocha for testing.
7. React Alert module from ['react-s-alert'](https://github.com/juliancwirko/react-s-alert)

#### Star related.
[Reference](http://curious.astro.cornell.edu/about-us/112-observational-astronomy/stargazing/technical-questions/699-what-are-ra-and-dec-intermediate)
