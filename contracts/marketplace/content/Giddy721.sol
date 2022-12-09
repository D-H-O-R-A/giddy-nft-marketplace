// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract GiddyNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event NFTMinted (
        uint256 indexed tokenId,
        string tokenURI
    );
    constructor() ERC721("Giddy NFT", "GNFT") {}

    function Mint(string memory tokenURI) public returns (uint) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        emit NFTMinted(newTokenId, tokenURI);
        return newTokenId;
    }
}

//Mumbai - 0xa051cdbfA384463Ad12fF45796F3AA420aca6bD3