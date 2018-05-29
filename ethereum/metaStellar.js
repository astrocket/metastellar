import web3 from './web3';
import MetaStellar from './build/MetaStellar.json';

const instance = new web3.eth.Contract(
    JSON.parse(MetaStellar.interface),
    '0x8C9747884b022CD83015661EFc647793A7d03fB0'
);

export default instance;
