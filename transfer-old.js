const Web3 = require('web3')
const axios = require('axios')
const EthereumTx = require('ethereumjs-tx')
const log = require('ololog').configure({ time: true })
const ansi = require('ansicolor').nice

const testnet = `http://54.152.214.134:22000`

const web3 = new Web3( new Web3.providers.HttpProvider(testnet) )

web3.eth.defaultAccount = "0xd46be2B006c94cE571E86A1250249E4f38cb6d61"

const amountToSend = 0.001


const main = async () => {
    // our code goes here
    let balance
    web3.eth.getBalance(web3.eth.defaultAccount, (err, wei) => {
        balance = web3.utils.fromWei(wei, 'ether')
        log(balance)
    })

    //let myBalanceWei = web3.eth.getBalance(web3.eth.defaultAccount).toNumber()
    //let myBalance = web3.fromWei(myBalanceWei, 'ether')
 
    //log(`Your wallet balance is currently ${myBalance} ETH`.green)

  }
   
  main()