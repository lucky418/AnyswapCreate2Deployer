const { ethers } = require("hardhat");

module.exports = async ({ deployments }) => {
  const { deploy } = deployments;
  const [deployer] = await ethers.getSigners();

  console.log("Now deploying AnyswapCreate2Deployer...");
  const anyswapCreate2Deployer = await deploy("AnyswapCreate2Deployer", {
    from: deployer.address,
    args: [],
  });
  console.log("AnyswapCreate2Deployer contract address: ", anyswapCreate2Deployer.address);
};
module.exports.tags = ["bsctestnet_AnyswapCreate2Deployer_deploy"];
