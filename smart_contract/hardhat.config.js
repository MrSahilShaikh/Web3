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
        accounts:[''],
        chainID: 5
      }
    }
};
