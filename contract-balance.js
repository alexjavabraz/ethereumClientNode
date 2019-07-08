const ethers = require('ethers');

// The address from the above deployment example
let contractAddress = "0xBAdC87645e05f13cb91E864D33828d2221358eE2";
let ownerAccount = '0x03821664E95ACB57D78aBc9AD262a9EbD340B95e';
let clientAccount = "0xFa42eCE9c9E1d34AB8b5067Ed2E9DDA03301cf5D";
let privateKey = 'be587b8c4eacadb1fe727a88fa1057b1248e6005db2121d109216659a9f0cac3';

// The Contract interface
let abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_summary","type":"string"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_summary","type":"string"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"description","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTotalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"},{"name":"_burnedAccount","type":"address"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"},{"indexed":false,"name":"message","type":"string"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_value","type":"uint256"},{"indexed":false,"name":"eventType","type":"uint8"},{"indexed":false,"name":"message","type":"string"}],"name":"Minted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_value","type":"uint256"},{"indexed":false,"name":"eventType","type":"uint8"},{"indexed":false,"name":"message","type":"string"}],"name":"Burnt","type":"event"}];


// Connect to the network
let url = "http://localhost:7545";
let provider = new ethers.providers.JsonRpcProvider(url);
let wallet = new ethers.Wallet(privateKey, provider);

(async function() {

    let contract = new ethers.Contract(contractAddress, abi, provider);
    console.log(contract.address);
    let contractWithSigner = contract.connect(wallet);

    let newValue = await contractWithSigner.getBalance(ownerAccount);
    console.log("Owner Account Balance : " + newValue.toNumber());
    let newValue1 = await contractWithSigner.getBalance(clientAccount);
    console.log("client Account Balance : " + newValue1.toNumber());
})();