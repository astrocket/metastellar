import web3 from './web3';
import MetaStellar from './build/MetaStellar.json';
import credentials from '../static/data/credentials.json';

const instance = new web3.eth.Contract(
    JSON.parse(MetaStellar.interface),
    credentials.ropsten
);

export default instance;
