// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };

// https://eth-goerli.g.alchemy.com/v2/9XLGPeSxIOs6us7ur51kOK2b6CBU44hk

require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.0",
    networks:{
      hardhat: {
      },
      goerli:{
        url:'https://eth-goerli.g.alchemy.com/v2/9XLGPeSxIOs6us7ur51kOK2b6CBU44hk',
        accounts:['dfa6565db8a8284d509a12e5ff3fd6d772fc02f8db65c6e06e95e4efb5c57ee3'],
        chainID: 5
      }
    }
};