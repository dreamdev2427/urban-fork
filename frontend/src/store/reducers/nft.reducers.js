import { SET_SERVICE_FEE,  SET_EVO_NFT_LIST, SET_NFT_TRADING_RESULT, SET_STAKED_NFT_LIST, SET_TOTAL_REWARD, UPDATE_MINTED_NFT_COUNT, 
    UPDATE_GOT_WL,
    UPDATE_CURRENT_LENGTH_OF_WL,
    UPDATE_MAX_LENGTH_OF_WL
} from "../actions/action.types";

const init = {
    serviceFee: 1.5,   //percentage value 1.5 means 1.5%,
    tradingResult: null,
    evoList: null,
    stakedList: null,
    totalReward: 0,
    mintedNFTCount: 0,
    gotWL: false,
    lengthOfWL: 0,
    maxLenOfWL: 0
}

export default function Nft(state = init, action) {
    switch(action.type) {
        case UPDATE_CURRENT_LENGTH_OF_WL:
            return {
                ...state,
                lengthOfWL: action.payload
            }
        case UPDATE_MAX_LENGTH_OF_WL:
            return {
                ...state,
                maxLenOfWL: action.payload
            }
        case UPDATE_GOT_WL:
            return {
                ...state,
                gotWL: action.payload
            }
        case UPDATE_MINTED_NFT_COUNT:
            return {
                ...state, mintedNFTCount: action.payload
            }
        case SET_TOTAL_REWARD:
            return {
                ...state, totalReward: action.payload
            }
        case SET_STAKED_NFT_LIST:
            return {
                ...state, stakedList: action.payload
            }
        case SET_EVO_NFT_LIST:
            console.log("[SET_EVO_NFT_LIST] action.payload = ", action.payload)
            return {
                ...state, evoList: action.payload
            }
        case SET_SERVICE_FEE:
            return {
                ...state, serviceFee: action.payload
            }
        case SET_NFT_TRADING_RESULT:
            // console.log("[SET_NFT_TRADING_RESULT Reducer ] payload = ", action.payload)
            return {
                ...state, tradingResult: action.payload
            }
        default:
            return {...state};
    }
}
