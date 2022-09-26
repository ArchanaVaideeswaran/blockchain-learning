// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PieToken is ERC20 {
    constructor() ERC20("Pie Token", "PIE") {}

    modifier isNotContract() {
        require(!(msg.sender.code.length > 0), "caller cannot be contract");
        _;
    }

    function mint(address to, uint amount) external isNotContract {
        _mint(to, amount);
    }

    function burn(address account, uint amount) external isNotContract {
        _burn(account, amount);
    }
}