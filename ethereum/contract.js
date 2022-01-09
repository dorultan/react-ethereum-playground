// contract.js - used for easier interaction with the contract
// NOTE: fix Contract imports when needed
import web3 from './web3';
import Contract from './build/Cash.json';

export default (address) => {
    return new web3.eth.Contract(JSON.parse(Contract.interface), address);
};
