import isEmpty from "../../utilities/isEmpty";
import { SET_EVO_NFT_LIST, SET_NFT_TRADING_RESULT, SET_STAKED_NFT_LIST, SET_TOTAL_REWARD, UPDATE_MINTED_NFT_COUNT, 
    UPDATE_GOT_WL,
    UPDATE_MAX_LENGTH_OF_WL,
    UPDATE_CURRENT_LENGTH_OF_WL } from "./action.types";

export const updateEvoNFTList = (items) => async (dispatch) =>
{
    if(isEmpty(items) === true)
    {        
        dispatch({
            type: SET_EVO_NFT_LIST,
            payload: null
        })
    }else{
        dispatch({
            type: SET_EVO_NFT_LIST,
            payload: items
        })
    }
}


export const updateStakedNFTList = (items) => (dispatch) =>
{
    if(isEmpty(items) === true)
    {        
        dispatch({
            type: SET_STAKED_NFT_LIST,
            payload: null
        })
    }else{
        dispatch({
            type: SET_STAKED_NFT_LIST,
            payload: items
        })
    }
}

export const setNFTTradingResult  = (functionName, success, message) => dispatch =>
{    
    console.log("[SET_NFT_TRADING_RESULT action ] : ", functionName, success, message)
    dispatch({
        type: SET_NFT_TRADING_RESULT,
        payload: {
            function : functionName,
            success : success,
            message : message
        }
    });
}

export const emptyNFTTradingResult  = () => dispatch =>
{    
    console.log("[SET_NFT_TRADING_RESULT action ] : null" )
    dispatch({
        type: SET_NFT_TRADING_RESULT,
        payload: null
    });
}

export const updateTotalReward  = (totalReward) => dispatch =>
{
    dispatch({
        type: SET_TOTAL_REWARD,
        payload: totalReward
    })
}

export const updateMintedNFTCountAfterTrading =  (count) => dispatch =>
{
    //UPDATE_MINTED_NFT_COUNT
    dispatch({
        type: UPDATE_MINTED_NFT_COUNT,
        payload: count
    })
}

export const updateIsWhitelisted =  (gotWL) => dispatch =>
{
    dispatch({
        type: UPDATE_GOT_WL,
        payload: gotWL
    })
}

export const updteMAXLenOfWL  = (_max) => dispatch =>
{
    dispatch({
        type: UPDATE_MAX_LENGTH_OF_WL,
        payload: _max
    })
}

export const updteCurrentLenOfWL  = (_len) => dispatch =>
{
    dispatch({
        type: UPDATE_CURRENT_LENGTH_OF_WL,
        payload: _len
    })
}

