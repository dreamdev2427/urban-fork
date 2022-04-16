import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

// const store = createStore(
//     reducers,
//     applyMiddleware(
//         thunk
//     )
// );

export default store;