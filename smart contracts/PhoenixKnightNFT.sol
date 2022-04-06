// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PhoenixKnightNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _numberOfTokens;
    using SafeMath for uint256;

    string base_uri;
    uint8 private saleMode;
    uint256 private preSalePrice;
    uint256 private publicSalePrice;
    address payable private feeWallet1;
    address payable private feeWallet2;
    uint8 private percentOfWallet1;
    uint8 private percentOfWallet2;
    uint256 private TOKEN_LIMIT;
    bool _status;
    uint256[] private indices;
    event Received(address addr, uint amount);
    event Fallback(address addr, uint amount);

    constructor() ERC721("PhoenixKnightNFT", "PHKNFT") {
        base_uri = "https://ipfs.infura.io/ipfs/QmU7S7urCReuuzfhcrFT9uko2ntUTQziQMbLZUbQULYjqq/";
        saleMode = 1;   // 1: preSale, 2:publicSale
        preSalePrice = 0.005 ether;
        publicSalePrice = 0.02 ether;
        feeWallet1 = payable( address(0xe28f60670529EE8d14277730CDA405e24Ac7251A) );
        feeWallet2 = payable( address(0x73875DeDa18dE0105987c880aFbbC21F3F6b955c) );
        percentOfWallet1 = 30;
        percentOfWallet2  = 70;
        _status = false;
        TOKEN_LIMIT = 10000;
        uint256 j;
        indices = new uint256[](TOKEN_LIMIT);
        for(j=0; j<TOKEN_LIMIT; j++) indices[j] = 0;
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

    function setTokenLimit(uint256 _limit) external onlyOwner{   
        TOKEN_LIMIT = _limit;     
        uint256 j;
        indices = new uint256[](TOKEN_LIMIT);
        for(j=0; j<TOKEN_LIMIT; j++) indices[j] = 0;
    }

    function getTokenLimit() public view returns(uint256){
        return TOKEN_LIMIT;
    }

    function setSaleMode(uint8 _mode) external onlyOwner{
        require(_mode == 1 || _mode == 2, "Invalid sale mode. Must be 1 or 2." );   
        saleMode = _mode;
    }
    
    function getSaleMode() public view returns(uint8) {
        return saleMode;
    }

    function setPreSalePrice(uint256 _price) external onlyOwner{
        require(_price > 0, "Invalid price. Must be a positive number." );    
        preSalePrice = _price;
    }

    function getPreSalePrice() public view returns(uint256){
        return preSalePrice;
    }

    function setPublicSalePrice(uint256 _price) external onlyOwner{
        require(_price > 0, "Invalid price. Must be a positive number." );          
        publicSalePrice = _price;
    }

    function getPublicSalePrice() public view returns(uint256){
        return publicSalePrice;
    }

    function setFeeWallet1(address payable _wallet) external onlyOwner{
        require(_wallet != address(0), "Invalid wallet address." );          
        feeWallet1 = _wallet;
    }

    function getFeeWallet1() public view returns(address) {
        return feeWallet1;
    }

    function setFeeWallet2(address payable _wallet) external onlyOwner{
        require(_wallet != address(0), "Invalid wallet address." );          
        feeWallet2 = _wallet;
    }

    function getFeeWallet2() public view returns(address) {
        return feeWallet2;
    }

    function setPercentOfWallet1(uint8 _percent) external onlyOwner{
        require(_percent>=0 && _percent<=100, "Invalid percent. Must be in 0~100." );          
        percentOfWallet1 = _percent;
    }

    function getPercentOfWallet1() public view returns(uint8) {
        return percentOfWallet1;
    }

    function setPercentOfWallet2(uint8 _percent) external onlyOwner{
        require(_percent>=0 && _percent<=100, "Invalid percent. Must be in 0~100." );      
        percentOfWallet2 = _percent;
    }

    function getPercentOfWallet2() public view returns(uint8) {
        return percentOfWallet2;
    }

    function getCountOfMintedNfts() public view returns(uint256) {
        return _numberOfTokens.current();
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
    
    function randomIndex() internal returns (uint) {
        uint totalSize = TOKEN_LIMIT - _numberOfTokens.current();
        uint index = uint(keccak256(abi.encodePacked(msg.sender, block.timestamp))) % totalSize;
        uint value = 0;
        if (indices[index] != 0) {
            value = indices[index];
        } else {
            value = index;
        }

        if (indices[totalSize - 1] == 0) {
      
            indices[index] = totalSize - 1;
        } else {
            indices[index] = indices[totalSize - 1];
        }
        return value.add(1);
    }

    function getIndicies() public view returns(uint256[] memory) {
        uint256[] memory _indices = new uint256[](indices.length);
        uint256 j;
        for(j=0; j<indices.length; j++) _indices[j] = indices[j];
        return _indices;
    }
    
    function mint(address recipient)  external  payable nonReentrant {   
        require(TOKEN_LIMIT - _numberOfTokens.current() > 0, "Cannot mint. The collection has no remains."); 
        uint256 _price;
        if(saleMode == 1) _price = preSalePrice;
        if(saleMode == 2) _price = publicSalePrice;
        require(msg.value >= _price, "Invalid price, price is less than sale price."); 
        require(recipient != address(0), "Invalid recipient address." );          
                 
        uint256 nftId = randomIndex();
        _numberOfTokens.increment();
        _mint(recipient, nftId);
        string memory fullUri = string.concat(base_uri, itod(nftId));
        setTokenURI(nftId, fullUri);
        
        feeWallet1.transfer(_price * percentOfWallet1 / 100);
        feeWallet2.transfer(_price * percentOfWallet2 / 100);
    }

    function batchMint(address recipient, uint256 _count)  external   payable nonReentrant  { 
        require(TOKEN_LIMIT - _numberOfTokens.current() > 0, "Cannot mint. The collection has no remains.");  
        uint256 _price;
        if(saleMode == 1) _price = preSalePrice * _count;
        if(saleMode == 2) _price = publicSalePrice * _count;
        require(msg.value >= _price, "Invalid price, price is less than sale price."); 
        require(recipient != address(0), "Invalid recipient address." );           
        require(_count > 0, "Invalid count value." );       
        uint256 i; 
        string memory fullUri;
        uint256 nftId;
        for(i = 0; i < _count; i++)
        {
            nftId = randomIndex();
            _numberOfTokens.increment();
            _mint(recipient, nftId);
            fullUri = string.concat(base_uri, itod(nftId));
            setTokenURI(nftId, fullUri);
        }
        
        feeWallet1.transfer(_price* percentOfWallet1 / 100);
        feeWallet2.transfer(_price * percentOfWallet2 / 100);
    }
}
