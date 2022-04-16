var PhoenixKnightNFT_abi = require("./interactWithSmartContract/PhoenixKnight.json");
var config = {
    baseUrl: "http://192.168.103.53/api/",    
    socketUrl: "http://192.168.103.53",
    imgUrl: "http://192.168.103.53/uploads/",
    chainId: 4, //Rinkeby Testnet : 4, Cronos testnet : 338, Cronos mainnet : 25,   bsctestnet : 97
    ipfsUrl: 'https://ipfs.infura.io/ipfs/',
    mainNetUrl: 'https://evm-cronos.crypto.org/',
    testNetUrl:  "https://data-seed-prebsc-1-s2.binance.org:8545/", 
    PhoenixKnightNFT_address : "0x73Ed40611A2cC313aA554934aBaCc13ff2dD9B5B", 
    MoralisAPIKey: "YEEwMh0B4VRg6Hu5gFQcKxqinJ7UizRza1JpbkyMgNTfj4jUkSaZVajOxLNabvnt",
    PhoenixKnightNFT_abi : PhoenixKnightNFT_abi,
    // EvoTokenContractAbi : evoToken_abi,
    // EvoManagerContractAbi : evoManager_abi, 
    NFT_MAX_MINT: 10000,
    MINTING_FEE_PER_NFT_WITH_WL: 0.03,
    MINTING_FEE_PER_NFT_WITHOUT_WL: 0.05,
    GETTING_WL_FEE: 0.2,
}

export default config;
