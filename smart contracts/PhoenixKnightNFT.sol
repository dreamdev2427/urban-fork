// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract PhoenixKnightNFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _numberOfTokens;
    using SafeMath for uint256;

    string base_uri;
    uint8 private saleMode;
    uint256 private preSalePrice;
    uint256 private publicSalePrice;
    address payable private ManagerWallet;
    address payable private DevWallet;
    uint16 private percentOfManagerWallet;
    uint16 private percentOfDevWallet;
    uint256 private _totalSupply = 10000;
    bool private _status;
    bool[10000] private indices;
    uint256 private spanSize = 100;
    uint256 private consideringSpanIndex = 0;
    uint256 nounce = 0;
    mapping(address => bool) WhiteListForUsers;
    mapping(address => uint8) CountOfMintsPerUser;
    uint256 _numberOfInvestors;
    uint256 _totalWhitelistedUsers;
    uint256 maxOfWhiteListedUsers = 300;
    bool enableMint = false;
    uint256 pauseContract = 0;
    uint8 MaxOfMintForWLedUsers = 5;
    event Received(address addr, uint amount);
    event Fallback(address addr, uint amount);
    event WithdrawAll(address addr, uint256 token, uint256 native);
    event SetContractStatus(address addr, uint256 pauseValue);

    constructor() ERC721("PhoenixKnightNFT", "PHKNFT") 
    {
        base_uri = "https://ipfs.infura.io/ipfs/QmR8Fs5zseYYVhvVFjNS7EJQrNHwcs3UpswpC1QonWXZMn/";

        saleMode = 1;   // 1: preSale, 2:publicSale
        preSalePrice = 3 ether;
        publicSalePrice = 5 ether;
        ManagerWallet = payable( address(0xB9c4395648CA40139147F7CAB685f4e3c44101C6) );
        DevWallet = payable( address(0x974D781a45B1B0BE4b629D95F78f1D7dD63e33cf) );
        percentOfManagerWallet = 985; //98.5%
        percentOfDevWallet  = 15; //1.5%
        _status = false;
        _numberOfInvestors = 0;
        _totalWhitelistedUsers = 0;
    }

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    fallback() external payable { 
        emit Fallback(msg.sender, msg.value);
    }
    
    function getContractStatus() external view returns (uint256) {
        return pauseContract;
    }

    function setContractStatus(uint256 _newPauseContract) external onlyOwner {
        pauseContract = _newPauseContract;
        emit SetContractStatus(msg.sender, _newPauseContract);
    }

    function totalSupply() public view returns(uint256){
        return _totalSupply;
    }

    function setSaleMode(uint8 _mode) external onlyOwner{
        require(pauseContract == 0, "Contract Paused");
        require(_mode == 1 || _mode == 2, "Invalid sale mode. Must be 1 or 2." );   
        saleMode = _mode;
    }
    
    function getSaleMode() public view returns(uint8) {
        return saleMode;
    }

    function setPreSalePrice(uint256 _price) external onlyOwner{
        require(pauseContract == 0, "Contract Paused");
        require(_price > 0, "Invalid price. Must be a positive number." );    
        preSalePrice = _price;
    }

    function getPreSalePrice() public view returns(uint256){
        return preSalePrice;
    }

    function setPublicSalePrice(uint256 _price) external onlyOwner{
        require(pauseContract == 0, "Contract Paused");
        require(_price > 0, "Invalid price. Must be a positive number." );          
        publicSalePrice = _price;
    }

    function getPublicSalePrice() public view returns(uint256){
        return publicSalePrice;
    }

    function setManagerWallet(address payable _wallet) external onlyOwner{
        require(pauseContract == 0, "Contract Paused");
        require(_wallet != address(0), "Invalid wallet address." );          
        ManagerWallet = _wallet;
    }

    function getManagerWallet() public view returns(address) {
        return ManagerWallet;
    }

    function setDevWallet(address payable _wallet) external onlyOwner{
        require(pauseContract == 0, "Contract Paused");
        require(_wallet != address(0), "Invalid wallet address." );          
        DevWallet = _wallet;
    }

    function getDevWallet() public view returns(address) {
        return DevWallet;
    }

    function setPercentOfManagerWallet(uint8 _percent) external onlyOwner{
        require(pauseContract == 0, "Contract Paused");
        require(_percent>=0 && _percent<=1000, "Invalid percent. Must be in 0~1000." );          
        percentOfManagerWallet = _percent;
    }

    function getPercentOfManagerWallet() public view returns(uint16) {
        return percentOfManagerWallet;
    }

    function setPercentOfDevWallet(uint8 _percent) external onlyOwner{
        require(pauseContract == 0, "Contract Paused");
        require(_percent>=0 && _percent<=1000, "Invalid percent. Must be in 0~1000." );      
        percentOfDevWallet = _percent;
    }

    function getPercentOfDevWallet() public view returns(uint16) {
        return percentOfDevWallet;
    }

    function getCountOfMintedNfts() public view returns(uint256) {
        return _numberOfTokens.current();
    }

    function getBaseuri() public view returns(string memory){
        return base_uri;
    }

    function setBaseUri(string memory _newUri) external onlyOwner {
        require(pauseContract == 0, "Contract Paused");
        base_uri = _newUri;
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return string(abi.encodePacked(base_uri, Strings.toString(_tokenId), ".json"));
    }

    function setNounce(uint256 _nounce) public {
        require(pauseContract == 0, "Contract Paused");
        nounce = _nounce;
    }

    function setEnableMint(bool _enable) public onlyOwner{
        require(pauseContract == 0, "Contract Paused");
        enableMint = _enable;
    }

    function getEnableMint() public view returns(bool){
        return enableMint;
    }

    function setMaxOfMintForWLedUsers(uint8 _max) public {
        require(_max >= 1, "Must be bigger than 1.");
        MaxOfMintForWLedUsers = _max;
    }

    function getMaxOfMintForWLedUsers() public view returns(uint8) {
        return MaxOfMintForWLedUsers;
    }

    function getCountOfMintsOfWLedUser(address _user) public view returns(uint8) {
        return CountOfMintsPerUser[_user];
    }

    function randomIndex() internal  returns (uint) 
    {
        require(pauseContract == 0, "Contract Paused");
        uint256 index;

        index = uint256(keccak256(abi.encodePacked(
            block.timestamp , block.difficulty , msg.sender, nounce++ , spanSize
        ))) % spanSize;

        index.add( consideringSpanIndex.mul(spanSize) );

        index = isExists(index);
        
        return index; 
    }

    function isExists(uint256 index) internal returns(uint256)
    {
        require(pauseContract == 0, "Contract Paused");
        uint256 idx=1;
        uint256 newIndex = index;
        if(indices[newIndex] == true) 
        {
            for(idx = 0; idx < spanSize; idx++)
            {
                if(indices[consideringSpanIndex.mul(spanSize).add(idx)] == false)
                {
                    newIndex = consideringSpanIndex.mul(spanSize).add(idx);
                    break;
                }
            }
        }
        indices[newIndex] = true;
        return newIndex;
    }

    function setMAXNumberOfWLUsers(uint256 _max) public onlyOwner{
        require(pauseContract == 0, "Contract Paused");
        maxOfWhiteListedUsers = _max;
    }

    function getMAXNumberOfWLUsers() public view returns(uint256){
        return maxOfWhiteListedUsers;
    }

    function getNumberOfWLUsers() public view returns(uint256){
        return _totalWhitelistedUsers;
    }

    function addUser2WhiteList(address _addr) public payable {
        require(pauseContract == 0, "Contract Paused");
        if(_totalWhitelistedUsers >= maxOfWhiteListedUsers){
            require(msg.value >= 0.2 ether, "You should pay 0.2 AVAX to be whitelisted.");            
            ManagerWallet.transfer(msg.value.mul(percentOfManagerWallet).div(1000));
            DevWallet.transfer(msg.value.mul(percentOfDevWallet).div(1000));
        }
        WhiteListForUsers[_addr] = true;
        _totalWhitelistedUsers.add(1);
    }

    function isWhitelistedForUsers(address _addr) public view returns(bool){
        return WhiteListForUsers[_addr];
    }

    function isWhiteListed(address _addr) public view returns(bool){
        return WhiteListForUsers[_addr];
    }

    function mint(uint8 _count)  external  payable  {   
        require(pauseContract == 0, "Contract Paused");
        require(enableMint == true, "Minting is disabled");
        bool isWLed = isWhiteListed(msg.sender);
        uint256 _price;
        if(isWLed == true) 
        {
            require(_count >= 1 && _count <= MaxOfMintForWLedUsers, "You can mint 1 to 5 NFT(s).");
            require(_count <= MaxOfMintForWLedUsers - CountOfMintsPerUser[msg.sender], "Exceed the number of NFTs you can mint.");
            _price = preSalePrice.mul(_count);
        }
        else {
            _price = publicSalePrice.mul(_count);
        }
        require(_totalSupply.sub(_numberOfTokens.current()).sub(_count) > 0, "Cannot mint. The collection has no remains."); 
        // if(saleMode == 1) _price = preSalePrice.mul(_count);
        // if(saleMode == 2) _price = publicSalePrice.mul(_count);
        require(msg.value >= _price, "Invalid price, price is less than sale price."); 
        require(msg.sender != address(0), "Invalid recipient address." );        

        uint256 idx;

        for(idx = 0; idx < _count; idx++)
        {
            uint256 nftId = randomIndex();
            _numberOfTokens.increment();
            _mint(msg.sender, nftId);

            if( _numberOfTokens.current() % spanSize == 0 )
                consideringSpanIndex++;
        }                   
        if(isWLed == true) CountOfMintsPerUser[msg.sender] = CountOfMintsPerUser[msg.sender] + _count;
        
        ManagerWallet.transfer(_price.mul(percentOfManagerWallet).div(1000));
        DevWallet.transfer(_price.mul(percentOfDevWallet).div(1000));
    }

    function burn(uint256 _tokenId) external onlyOwner {
        require(pauseContract == 0, "Contract Paused");
        _burn(_tokenId);
    }
        
    function withdrawAll(address _addr) external onlyOwner{
        uint256 balance = IERC20(_addr).balanceOf(address(this));
        if(balance > 0) {
            IERC20(_addr).transfer(msg.sender, balance);
        }
        address payable mine = payable(msg.sender);
        if(address(this).balance > 0) {
            mine.transfer(address(this).balance);
        }
        emit WithdrawAll(msg.sender, balance, address(this).balance);
    }
    
}




