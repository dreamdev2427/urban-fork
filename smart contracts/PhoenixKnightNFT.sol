// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PhoenixKnightNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string base_uri;
    uint8 private saleMode;
    uint256 private preSalePrice;
    uint256 private publicSalePrice;
    address private feeWallet1;
    address private feeWallet2;
    uint8 private percentOfWallet1;
    uint8 private percentOfWallet2;
    bool _status;
    event Received(address addr, uint amount);
    event Fallback(address addr, uint amount);

    constructor() ERC721("PhoenixKnightNFT", "PHKNFT") {
        base_uri = "https://ipfs.infura.io/ipfs/QmU7S7urCReuuzfhcrFT9uko2ntUTQziQMbLZUbQULYjqq/";
        saleMode = 1;   // 1: preSale, 2:publicSale
        preSalePrice = 0.005 ether;
        publicSalePrice = 0.02 ether;
        feeWallet1 = address(0xe28f60670529EE8d14277730CDA405e24Ac7251A);
        feeWallet2 = address(0x73875DeDa18dE0105987c880aFbbC21F3F6b955c);
        percentOfWallet1 = 25;
        percentOfWallet2  = 75;
        _status = false;
    }

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    fallback() external payable { 
        emit Fallback(msg.sender, msg.value);
    }

    modifier nonReentrant() {
        require(_status != true, "ReentrancyGuard: reentrant call");
        _status = true;
        _;
        _status = false;
    }

    function setSaleMode(uint8 _mode) external onlyOwner{
        saleMode = _mode;
    }
    
    function getSaleMode() public view returns(uint8) {
        return saleMode;
    }

    function setPreSalePrice(uint256 _price) external onlyOwner{
        preSalePrice = _price;
    }

    function getPreSalePrice() public view returns(uint256){
        return preSalePrice;
    }

    function setPublicSalePrice(uint256 _price) external onlyOwner{
        publicSalePrice = _price;
    }

    function getPublicSalePrice() public view returns(uint256){
        return publicSalePrice;
    }

    function setFeeWallet1(address _wallet) external onlyOwner{
        feeWallet1 = _wallet;
    }

    function getFeeWallet1() public view returns(address) {
        return feeWallet1;
    }

    function setFeeWallet2(address _wallet) external onlyOwner{
        feeWallet2 = _wallet;
    }

    function getFeeWallet2() public view returns(address) {
        return feeWallet2;
    }

    function setPercentOfWallet1(uint8 _percent) external onlyOwner{
        percentOfWallet1 = _percent;
    }

    function getPercentOfWallet1() public view returns(uint8) {
        return percentOfWallet1;
    }

    function setPercentOfWallet2(uint8 _percent) external onlyOwner{
        percentOfWallet2 = _percent;
    }

    function getPercentOfWallet2() public view returns(uint8) {
        return percentOfWallet2;
    }

    function getCountOfMintedNfts() public view returns(uint256) {
        return _tokenIds.current();
    }

    function getBaseuri() public view returns(string memory){
        return base_uri;
    }

    function setBaseUri(string memory _newUri) external onlyOwner returns(string memory){
        base_uri = _newUri;
        return base_uri;
    }

    function tranferNFT(address _from, address _to, uint256 _tokenId) external payable {
        transferFrom(_from, _to, _tokenId);
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return super.tokenURI(_tokenId);
    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        super._setTokenURI(tokenId, _tokenURI);
    }
    
    function itod(uint256 x) private pure returns (string memory) {
        if (x > 0) {
            string memory str;
            while (x > 0) {
                str = string(abi.encodePacked(uint8(x % 10 + 48), str));
                x /= 10;
            }
            return str;
        }
        return "0";
    }

    function mint(address recipient)  external  payable nonReentrant {   
        if(saleMode == 1) require(msg.value >= preSalePrice, "Invalid price, price is less than pre sale price."); 
        if(saleMode == 2) require(msg.value >= publicSalePrice, "Invalid price, price is less than public sale price."); 
        require(recipient != address(0), "Invalid recipient address." );           
                 
        _tokenIds.increment();

        uint256 nftId = _tokenIds.current(); 
        _mint(recipient, nftId);
        string memory fullUri = string.concat(base_uri, itod(nftId));
        setTokenURI(nftId, fullUri);

        
    }

    function batchMint(address recipient, uint256 _count)  external   payable nonReentrant  {    
        if(saleMode == 1) require(msg.value >= preSalePrice, "Invalid price, price is less than pre sale price."); 
        if(saleMode == 2) require(msg.value >= publicSalePrice, "Invalid price, price is less than public sale price."); 
        require(recipient != address(0), "Invalid recipient address." );           
        require(_count > 0, "Invalid count value." );       
        uint256 i; 
        string memory fullUri;
        for(i = 0; i < _count; i++)
        {
            _tokenIds.increment();

            uint256 nftId = _tokenIds.current(); 
            _mint(recipient, nftId);
            fullUri = string.concat(base_uri, itod(nftId));
            setTokenURI(nftId, fullUri);
        }
    }
}
