pragma solidity ^0.6.11;

contract HelloToken {
    string public name = 'HelloToken';

    uint256 public nextTokenId = 0;

    mapping(uint256 => uint256) private _dataStorage;

    constructor() public {}

    function _generate() internal returns (uint256) {
        uint256 tokenId = nextTokenId;
        nextTokenId = nextTokenId + 1;
        return tokenId;
    }

    function mint(
        uint256 amount
    ) public returns (uint256) {
        uint256 tokenId = _generate();
        _dataStorage[tokenId] = amount;
        return tokenId;
    }

    function getData(uint256 tokenId) public view returns (uint256) {
        return _dataStorage[tokenId];
    }
}

// SPDX-License-Identifier: MIT
