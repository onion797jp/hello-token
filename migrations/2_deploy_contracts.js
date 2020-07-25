const HelloToken = artifacts.require('HelloToken');

/* DEFAULT */
module.exports = function(deployer) {
  deployer.deploy(HelloToken);
};

/* DEBUG */
// 1) truffle compile
// 2) truffle develop
// 3) migrate --reset
// module.exports = function (deployer, network, accounts) {
//   deployer.then(async () => {
//     const coin = await deployer.deploy(HelloToken);
//     let balance = await coin.getData(0);
//     console.log('HELLO! your balance is', Number(balance));
//     await coin.mint(100);
//     let tokenId = 0;
//     balance = await coin.getData(tokenId);
//     console.log(`tokenId ${tokenId} balance ${Number(balance)}`);
//     await coin.mint(200);
//     tokenId = 1;
//     balance = await coin.getData(tokenId);
//     console.log(`tokenId ${tokenId} balance ${Number(balance)}`);
//   });
// };
