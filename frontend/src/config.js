var PhoenixKnightNFT_abi = require("./interactWithSmartContract/PhoenixKnight.json");
var config = {
    chainId: 97, //Rinkeby Testnet : 0x4, Cronos testnet : 338, Cronos mainnet : 25,   bsctestnet : 97
    ipfsUrl: 'https://ipfs.infura.io/ipfs/',
    mainNetUrl: 'https://bsc-dataseed1.binance.org/',   //BSC testnet
    PhoenixKnightNFT_address : "0xFB145220deF0EC413bda629f3c2746817cF43c4D", 
    MoralisAPIKey: "YEEwMh0B4VRg6Hu5gFQcKxqinJ7UizRza1JpbkyMgNTfj4jUkSaZVajOxLNabvnt",
    PhoenixKnightNFT_abi : PhoenixKnightNFT_abi,
    NFT_MAX_MINT: 10000,
    MINTING_FEE_PER_NFT_WITH_WL: 0.03, //0.03 : test, 3 : real  
    MINTING_FEE_PER_NFT_WITHOUT_WL: 0.05,   //0.05 : test, 5 : real 
    GETTING_WL_FEE: 0.2, //0.02 : test, 0.2 : real
}

export default config;
