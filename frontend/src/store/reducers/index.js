import { combineReducers } from "redux";
import {Auth} from "./auth.reducers";
import Nft from "./nft.reducers";

const reducers = combineReducers({
    auth: Auth,
    nft: Nft,
})

export default reducers;
