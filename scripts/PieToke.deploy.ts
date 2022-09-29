import { ethers } from "hardhat";

async function main() {
    const [ owner ] = await ethers.getSigners();
    console.log(owner.address);

    const token = await ethers.getContractFactory("PieToken");
    const Token = await token.deploy();

    console.log(Token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});