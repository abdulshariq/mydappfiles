var FuturePrice = artifacts.require("./FuturePrice.sol");

module.exports = function(deployer) {
  deployer.deploy(FuturePrice);
};

