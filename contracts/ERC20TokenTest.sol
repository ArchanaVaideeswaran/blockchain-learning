// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./PieToken.sol";

contract ERC20TokenTest {

    PieToken pie;

    constructor(address token) {
        pie = PieToken(token);
    }

    function testMint() public {
        pie.mint(msg.sender, 100);
    }

    function testBurn() public {
        pie.burn(msg.sender, 100);
    }
}