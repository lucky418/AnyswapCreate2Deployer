# AnyswapCreate2Deployer

I created this repository to deploy AnyswapCreate2Deployer on BSC testnet.

The source code was copyed from [0x54F5A04417E29FF5D7141a6d33cb286F50d5d50e](https://bscscan.com/address/0x54F5A04417E29FF5D7141a6d33cb286F50d5d50e#code).

The contract has been deployed on [0xF9C249974c1Acf96a59e5757Cc9ba7035cE489B1](https://testnet.bscscan.com/address/0xF9C249974c1Acf96a59e5757Cc9ba7035cE489B1#writeContract).

## Installation
Pull the repository from GitHub and install its dependencies. You will need [npm](https://docs.npmjs.com/cli/install) installed.

    npm install

## Environment

Create files storing private key and infura API key.

    cp .secrets.json.template .secrets.json

Open .secrets.json with text editor, write menemonic, and bscscan API key

## Compile

Compile the smart contracts.

    npx hardhat compile

## Deploy and Verify contracts

You can deploy contracts and verify with bscscan API key.

	npx hardhat deploy --network bsctestnet --tags bsctestnet_AnyswapCreate2Deployer_deploy
	npx hardhat deploy --network bsctestnet --tags bsctestnet_AnyswapCreate2Deployer_verify

