// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PieToken is ERC20 {
    constructor() ERC20("Pie Token", "PIE") {}

    function mint(address to, uint amount) external {
        ensureNotContract();
        _mint(to, amount);
    }

    function burn(address account, uint amount) external {
        ensureNotContract();
        _burn(account, amount);
    }

    function ensureNotContract() private view {
        require(msg.sender.code.length == 0, "Caller cannot be contract");
    }
}