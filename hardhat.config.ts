import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "solidity-coverage";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-etherscan";
import { config as dotenv} from "dotenv";

dotenv();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  paths: {
    sources: "./contracts/",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  typechain: {
    outDir: "src/types",
  },
  networks: {
    "truffle": {
      url: "http://localhost:24012/rpc"
    },
    "goerli": {
      url: process.env.GOERLI_RPC_URL
    }
  },
  etherscan: {
    apiKey: {
      goerli: `${process.env.ETHERSCAN_API}`
    }
  }
};

export default config;
