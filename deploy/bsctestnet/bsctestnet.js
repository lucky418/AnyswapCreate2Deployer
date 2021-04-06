const { deployments } = require("hardhat");

module.exports = async () => {
  const anyswapCreate2Deployer = await deployments.get("AnyswapCreate2Deployer");

  console.log("Summary:");
  console.log("AnyswapCreate2Deployer address: ", anyswapCreate2Deployer.address);
};
module.exports.tags = ["bsctestnet"];
module.exports.dependencies = [
  "bsctestnet_AnyswapCreate2Deployer_deploy",
  "bsctestnet_AnyswapCreate2Deployer_verify",
];
