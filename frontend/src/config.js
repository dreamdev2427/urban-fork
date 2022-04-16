var PhoenixKnightNFT_abi = require("./interactWithSmartContract/PhoenixKnight.json");
var config = {
    baseUrl: "http://192.168.103.53/api/",    
    socketUrl: "http://192.168.103.53",
    imgUrl: "http://192.168.103.53/uploads/",
    chainId: 0x4, //Rinkeby Testnet : 0x4, Cronos testnet : 338, Cronos mainnet : 25,   bsctestnet : 97
    ipfsUrl: 'https://ipfs.infura.io/ipfs/',
    mainNetUrl: 'https://evm-cronos.crypto.org/',
    testNetUrl:  "https://data-seed-prebsc-1-s2.binance.org:8545/", 
    PhoenixKnightNFT_address : "0xC859871fa9c83b4A06c51A5D6A80c31D15Ea5096", 
    MoralisAPIKey: "YEEwMh0B4VRg6Hu5gFQcKxqinJ7UizRza1JpbkyMgNTfj4jUkSaZVajOxLNabvnt",
    PhoenixKnightNFT_abi : PhoenixKnightNFT_abi,
    // EvoTokenContractAbi : evoToken_abi,
    // EvoManagerContractAbi : evoManager_abi, 
    NFT_MAX_MINT: 10000,
    MINTING_FEE_PER_NFT_WITH_WL: 3,
    MINTING_FEE_PER_NFT_WITHOUT_WL: 5,
    GETTING_WL_FEE: 0.2,
}

export default config;
