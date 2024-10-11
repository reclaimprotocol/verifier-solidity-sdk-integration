import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.4",
};

export default config;
