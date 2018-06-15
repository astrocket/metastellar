## Metastellar project.

Constellation market on Ethereum & Metadium Blockchain for Metadium demo App purpose.

#### What is this project about ?

There are number of stars with familiar names on constellation. It would be really awesome if we could draw them on blockchain and let people own it.

There are number of features that could be an appealing point.

1. Comparison of Ethereum & Metadium blockchain.
   - Giving user a choice for selecting different chain base.
2. Identity Integration
   - Whoever purchases the star will want to show their identity that it's their's. Just showing off random addresses are quite meaningless. Using Identity platforms like Metadium, Metastellar can access to user's information like name, url, and etc. They will shine upon constellation.
3. Trading stars.
    - Nothing serious. Simple functions to purchase other's star.


#### Getting Started

0. Instal package dependencies
```bash
$ npm install
```
1. Regenerate star base for deploy.
```ruby
$ cd metastellar
$ ruby generate_star_seeds.rb
"Constellation Generated."
# for test purpose -> generate 5 stars only
$ ruby generate_star_seeds.rb -test
"Test Constellation Generated."
```
2. Generate search base for constellation search.
```bash
$ cd metastellar
$ ruby generate_search_seeds.rb
```
3. Compile smart contract. (in case you updated MetaStellar.sol)
```bash
cd ethereum
node compile.js
# generates ethereum/build/MetaStellar.json
```
4. Figuring ethereum enviroment
> static/data/credentials.json
You can set your basic credentials here.
5. Deploying smart contract & star bases.
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
6. Test Solidity Smart Contract
```bash
npm run test
```
7. Run application in local environment
```bash
$ npm run dev
// check from: localhost: 3000
```
8. Deploy
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


#### Smart Contract Requirements

1. Initial setup.
   1. Initial registration of stars.
   2. Contract owner registration.
2. Tracking and purchasing functions for purchased user.
3. Integration of MetID through Metadium SDK.
4. Being able to track user from star and vice versa.

#### Star related.
[Reference](http://curious.astro.cornell.edu/about-us/112-observational-astronomy/stargazing/technical-questions/699-what-are-ra-and-dec-intermediate)
