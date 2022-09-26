import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { PieToken, ERC20TokenTest } from "../src/types/contracts";
import { expect } from "chai";
import { ethers } from "hardhat";

let owner: SignerWithAddress;
let user1: SignerWithAddress;
let users: SignerWithAddress[];
let Pie: PieToken;
let Test: ERC20TokenTest;

describe("Pie Token", () => {
    before(async () => {
        [owner, user1, ...users] = await ethers.getSigners();

        const pie = await ethers.getContractFactory("PieToken");
        Pie = (await pie.deploy()) as PieToken;

        const test = await ethers.getContractFactory("ERC20TokenTest");
        Test = (await test.deploy(Pie.address)) as ERC20TokenTest;
    });

    it("should revert if caller is a contract",async () => {
        await expect(Test.testMint()).to.be
        .revertedWith("caller cannot be contract");

        await expect(Test.testBurn()).to.be
        .revertedWith("caller cannot be contract");
    });

    it("should execute successfylly if caller is not a contract",async () => {
        let to = owner.address;
        // let amount = ethers.utils.parseEther("10"); // Gives big number overflow exception in assertion
        let amount = 10;

        // Mint
        await expect(Pie.mint(to, amount)).to.changeTokenBalance(Pie, to, 10);

        // Burn
        await expect(Pie.burn(to, amount)).to.changeTokenBalance(Pie, to, -10);
    });
});