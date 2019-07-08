
const ethers = require('ethers');
let url = "http://localhost:7545";
let provider = new ethers.providers.JsonRpcProvider(url);
let address = "0x03821664E95ACB57D78aBc9AD262a9EbD340B95e";

provider.getBalance(address).then((balance) => {

    // balance is a BigNumber (in wei); format is as a sting (in ether)
    let etherString = ethers.utils.formatEther(balance);

    console.log("Balance: " + etherString);
});
