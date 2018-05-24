import web3 from './web3';
import MetaStellar from './build/MetaStellar.json';

const instance = new web3.eth.Contract(
    JSON.parse(MetaStellar.interface),
    '0x0'
);

export default instance;
