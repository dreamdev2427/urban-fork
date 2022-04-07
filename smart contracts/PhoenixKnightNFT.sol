// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

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
    uint256 private _totalSupply = 10000;
    bool private _status;
    bool[10000] private indices;
    uint256 private spanSize = 100;
    uint256 private consideringSpanIndex = 0;
    uint256 nounce = 0;
    event Received(address addr, uint amount);
    event Fallback(address addr, uint amount);

    constructor() ERC721("PhoenixKnightNFT", "PHKNFT") 
    {
        base_uri = "https://ipfs.infura.io/ipfs/QmU7S7urCReuuzfhcrFT9uko2ntUTQziQMbLZUbQULYjqq/";
        saleMode = 1;   // 1: preSale, 2:publicSale
        preSalePrice = 0.005 ether;
        publicSalePrice = 0.02 ether;
        feeWallet1 = payable( address(0xe28f60670529EE8d14277730CDA405e24Ac7251A) );
        feeWallet2 = payable( address(0x73875DeDa18dE0105987c880aFbbC21F3F6b955c) );
        percentOfWallet1 = 30;
        percentOfWallet2  = 70;
        _status = false;
    }

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    fallback() external payable { 
        emit Fallback(msg.sender, msg.value);
    }

    function totalSupply() public view returns(uint256){
        return _totalSupply;
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

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return string(abi.encodePacked(base_uri, Strings.toString(_tokenId)));
    }

    function setNounce(uint256 _nounce) public {
        nounce = _nounce;
    }

    function randomIndex() internal  returns (uint) 
    {
        uint index;

        index = uint256(keccak256(abi.encodePacked(
            block.timestamp , block.difficulty , msg.sender, nounce++ , spanSize
        ))) % spanSize;

        index += consideringSpanIndex * spanSize;

        index = isExists(index);
        
        return index; 
    }

    function isExists(uint256 index) internal returns(uint256)
    {
        uint256 idx=1;
        uint256 newIndex = index;
        if(indices[newIndex] == true) 
        {
            for(idx = 0; idx < spanSize; idx++)
            {
                if(indices[consideringSpanIndex * spanSize + idx] == false)
                {
                    newIndex = consideringSpanIndex * spanSize + idx;
                    break;
                }
            }
        }
        indices[newIndex] = true;
        return newIndex;
    }

    function mint(uint256 _count)  external  payable  {   
        require(_totalSupply - _numberOfTokens.current() - _count > 0, "Cannot mint. The collection has no remains."); 
        uint256 _price;
        if(saleMode == 1) _price = preSalePrice * _count;
        if(saleMode == 2) _price = publicSalePrice * _count;
        // require(msg.value >= _price, "Invalid price, price is less than sale price."); 

        require(msg.sender != address(0), "Invalid recipient address." );        

        uint256 idx;

        for(idx = 0; idx < _count; idx++){

            uint256 nftId = randomIndex();
            _numberOfTokens.increment();
            _mint(msg.sender, nftId);

            if( _numberOfTokens.current() % spanSize == 0 )
                consideringSpanIndex++;

        }                   
        
        // feeWallet1.transfer(_price * percentOfWallet1 / 100);
        // feeWallet2.transfer(_price * percentOfWallet2 / 100);
    }

    function burn(uint256 _tokenId) external onlyOwner {
        _burn(_tokenId);
    }
}
