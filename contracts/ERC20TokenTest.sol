// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./PieToken.sol";

contract ERC20TokenTest {

    PieToken private _pie;

    constructor(address token) {
        _pie = PieToken(token);
    }

    function testMint() public {
        _pie.mint(msg.sender, 100);
    }

    function testBurn() public {
        _pie.burn(msg.sender, 100);
    }
}