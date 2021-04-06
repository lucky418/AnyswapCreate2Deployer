const { ethers, run } = require("hardhat");

module.exports = async () => {
  const anyswapCreate2Deployer = await ethers.getContract("AnyswapCreate2Deployer");
  try {
    await run("verify:verify", {
      address: anyswapCreate2Deployer.address,
      constructorArguments: [],
      contract: "contracts/AnyswapCreate2Deployer.sol:AnyswapCreate2Deployer",
    });
  } catch (e) {
  }
};
module.exports.tags = ["bsctestnet_AnyswapCreate2Deployer_verify"];
