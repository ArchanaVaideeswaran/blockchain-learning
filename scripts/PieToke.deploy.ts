import { Contract } from "ethers";
import { ethers } from "hardhat";
import * as fs from "fs";

async function main() {
    const [ owner ] = await ethers.getSigners();
    console.log(owner.address);

    const Token = await ethers.getContractFactory("PieToken");
    const token = await Token.deploy();
    await token.deployed();
    console.log(token.address);

    storeContract(token);
}

function storeContract(contract: Contract) {
    // ----------------- MODIFIED FOR SAVING DEPLOYMENT DATA ----------------- //

    /**
     * @summary A build folder will be created in the root directory of the project
     * where the ABI, bytecode and the deployed address will be saved inside a JSON file.
     */

    const address = contract.address;
    const contractAbi = contract.interface.format('json').toString();
    const abi = JSON.parse(contractAbi);

    const output = {
        address,
        abi,
    };

    fs.mkdir('./build', { recursive: true }, (err) => {
        if (err) console.error(err);
    });

    fs.writeFileSync('./build/PieToken.json', JSON.stringify(output));

    // ----------------------------------------------------------------------- //
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});