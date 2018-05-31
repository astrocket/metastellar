import web3 from './web3';
import MetaStellar from './build/MetaStellar.json';
import dappAddress from '../dappAddress.json';

const instance = new web3.eth.Contract(
    JSON.parse(MetaStellar.interface),
    dappAddress.ropsten
);

export default instance;
