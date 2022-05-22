var PhoenixKnightNFT_abi = require("./interactWithSmartContract/PhoenixKnight.json");
var config = {
    chainId: 0xa86a, //Rinkeby Testnet : 0x4, Cronos testnet : 338, Cronos mainnet : 25,   bsctestnet : 97, avalanche: 0xa86a
    ipfsUrl: 'https://ipfs.infura.io/ipfs/',
    mainNetUrl: 'https://api.avax.network/ext/bc/C/rpc',
    PhoenixKnightNFT_address : "0x9d4EB3F30854cA4B46554313611F110E57104e9C", 
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
