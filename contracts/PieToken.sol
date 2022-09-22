// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract PieToken is ERC20 {
    constructor() ERC20("Pie Token", "PIE") {}

    function mint(address to, uint amount) public {
        require(!Address.isContract(msg.sender), "caller cannot be contract");
        _mint(to, amount);
    }

    function burn(address account, uint amount) public {
        require(!Address.isContract(msg.sender), "caller cannot be contract");
        _burn(account, amount);
    }
}