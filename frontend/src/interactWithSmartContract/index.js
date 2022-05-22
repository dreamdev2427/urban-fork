import Web3 from "web3";
import store from '../store';
import config from "../config";
import {setConnectedWalletAddress, setWalletStatus, setConnectedChainId, updateBalanceOfUser} from "../store/actions/auth.actions"; 
import { setNFTTradingResult,  updateEvoNFTList, updateMintedNFTCountAfterTrading, updateIsWhitelisted,
  updteMAXLenOfWL,
  updteCurrentLenOfWL } from "../store/actions/nft.actions";
// import isEmpty from "../utilities/isEmpty";
import axios from "axios";

export const loadWeb3 = async () => 
{
  if (window.ethereum) 
  {
    window.web3 = new Web3(window.ethereum);
    window.web3.eth.handleRevert = true;
  } 
  else if (window.web3) 
  {
    window.web3 = new Web3(Web3.givenProvider);
    window.web3.eth.handleRevert = true;
  } 
  else {
    // window.alert(
    //   "Non-Ethereum browser detected. Please connect and unlock your wallet."
    // );
    return;
  }
  if (window.ethereum) {
    window.ethereum.on('chainChanged', function (chainId) {

      store.dispatch(setConnectedChainId(chainId));
      checkNetworkById(chainId);

    });
    window.ethereum.on('disconnect', function(error  /*:ProviderRpcError*/) {
      //alert("disconnected, " + error);      
      store.dispatch(setConnectedWalletAddress(null));
      store.dispatch(setWalletStatus(false));
    });
    window.ethereum.on('accountsChanged', function(accounts /*: Array<string>*/) {
      //  alert("wallet "+accounts[0]+" is connected");
       if(accounts[0]   !== undefined)
       {
        store.dispatch(setConnectedWalletAddress(accounts[0]))
        store.dispatch(setWalletStatus(true));
       }
       if(accounts.length === 0) store.dispatch(setWalletStatus(false));
    });
  }
};

export const checkNetwork = async () => {
  if (window.web3) {
    const chainId = await window.web3.eth.getChainId();
    return checkNetworkById(chainId);
  }
}

export const checkNetworkById = async (chainId) => {
  const cid = await window.web3.eth.getChainId();
  store.dispatch(setConnectedChainId(cid));
  if (window.web3.utils.toHex(chainId) !== window.web3.utils.toHex(config.chainId)) 
  {
    store.dispatch(setWalletStatus(false));
    return false;  
  }
  return true;
}

export const checkNetworkAndChange = async (chainId) => {
  if (window.web3.utils.toHex(chainId) !== window.web3.utils.toHex(config.chainId)) 
  {
    store.dispatch(setWalletStatus(false));
    await changeNetwork();      
  }
  const cid = await window.web3.eth.getChainId();
  store.dispatch(setConnectedChainId(cid));
  return (window.web3.utils.toHex(cid) === window.web3.utils.toHex(config.chainId) )
}

const changeNetwork = async () => 
{
  try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: window.web3.utils.toHex(config.chainId) }],
      });
    } 
  catch (switchError) 
    {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) 
      {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: window.web3.utils.toHex(config.chainId),
                chainName: 'Avalanche',
                rpcUrls: [config.mainNetUrl] /* ... */,
              },
            ],
          });
          return {
            success : true,
            message : "switching succeed"
          }
        } catch (addError) {          
          return {
            success : false,
            message : "Switching failed." + addError.message
          }
        }
      }
    }
}

export const connectWallet = async () => 
{
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        success: true,
        message: "Metamask successfuly connected.",
        address: addressArray[0],
      };
      const chainId = await window.web3.eth.getChainId();
      checkNetworkAndChange(chainId);
      store.dispatch(setWalletStatus(true));
      return obj;
    } catch (err) {
      store.dispatch(setWalletStatus(false));
      return {
        success: false,
        address: "",
        message: err.message,
      };
    }
  }
  else {
    store.dispatch(setWalletStatus(false));
    return {
      success: false,
      address: "",
      message: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual BSC wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getValidWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        store.dispatch(setWalletStatus(true));
        return {
          success: true,
          address: addressArray[0],
          status: "Fill in the text-field above.",
        };
      } else {
        store.dispatch(setWalletStatus(false));
        return {
          success: false,
          address: "",
          status: "🦊 Please connect to Metamask.",
        };
      }
    } catch (err) {
      store.dispatch(setWalletStatus(false));
      return {
        success: false,
        address: "",
        status: err.message,
      };
    }
  } else {
    store.dispatch(setWalletStatus(false));
    return {
      success: false,
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual BSC wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getBalanceOfAccount = async (address) => 
{
  try {
    //let accounts = await web3.eth.getAccounts();

    let accountBalance = await window.web3.eth.getBalance(address);

    accountBalance = window.web3.utils.fromWei(accountBalance);

    store.dispatch(updateBalanceOfUser(accountBalance));

    return {
      success: true,
      account: address,
      balance: accountBalance
    }
  } catch (error) {
    
    store.dispatch(updateBalanceOfUser(0));

    return {
      success: false,
      balance: 0,
      result: "Something went wrong: " + parseErrorMsg(error.message)
    }
  }
}

export const compareWalllet = (first, second) => 
{
  if (!first || !second) {
    return false;
  }
  if (first.toUpperCase() === second.toUpperCase()) {
    return true;
  }
  return false;
}

const updateUserBalanceAfterTrading = async (currentAddr) =>
{
  let balanceOfUser = await window.web3.eth.getBalance(currentAddr);
  balanceOfUser = window.web3.utils.fromWei(balanceOfUser);
  store.dispatch(updateBalanceOfUser(balanceOfUser));
}

const parseErrorMsg = (errMsg) =>
{  
  var returStr  = "";
  let startPos = JSON.stringify(errMsg).search("message");
  if(startPos >= 0)
  {
    let subStr = errMsg.substring(startPos+4, errMsg.length)
    let endPos = subStr.indexOf("\"");
    if(endPos >= 0)
    {
      subStr = subStr.substring(0, endPos);
      returStr = subStr;
    }
  }else returStr = errMsg;
  return returStr;
}

  export const mint = async (currentAddr, fee) => 
  {
    /*
     mint(uint256 count)
    */

    try 
    {
      let EvoManagerContract = await new window.web3.eth.Contract(config.PhoenixKnightNFT_abi, config.PhoenixKnightNFT_address);
      let minting_fee = window.web3.utils.toWei(fee !== null ? fee.toString() : '0', 'ether');
      
      console.log("minting_fee = ", minting_fee);

      var mint = EvoManagerContract.methods.mint(1);
      let gasFee = await mint.estimateGas({ from: currentAddr, value: minting_fee });
      var balanceOfUser = await window.web3.eth.getBalance(currentAddr);
      var gasPrice = 30 * (10 ** 9);
  
      if (balanceOfUser <= gasFee * gasPrice) {
        store.dispatch(setNFTTradingResult("mint", false, "Insufficient balance." ));
      
        return {
          success : false,
          message : "Insufficient balance."
        }
      }
      await mint.send({ from: currentAddr, value: minting_fee });
  
      store.dispatch(setNFTTradingResult("mint", true, "Succeed in minting."));
  
      updateUserBalanceAfterTrading(currentAddr);
  
      return {
        success : true,
        message : "Succeed in minting."
      }
    } catch (error) {
      store.dispatch(setNFTTradingResult("mint", false, parseErrorMsg(error.message) ));
  
      return {
        success : false,
        message : parseErrorMsg(error.message)
      }
    }
  }
  
  export const getUsersNFTs = async (account) =>
  {    
    try{
      const res = await axios.get("https://deep-index.moralis.io/api/v2/" + account + "/nft/" + config.PhoenixKnightNFT_address + "?chain=0x"+ config.chainId +"&format=hex", {
        headers: { "X-API-Key": config.MoralisAPIKey },
      });
      console.log(res.data.result);

      const nftlist = res.data.result;
      if(nftlist && nftlist.length>0)
      {
          let nftItems = []; let tokenIds = [];
          nftlist.forEach(async (item) => {
            if(item.token_address.toLowerCase() === config.PhoenixKnightNFT_address.toLowerCase() ) 
            {            
              tokenIds.push(item.token_id);
            }
          });
            //get token uris from token IDs
            let PhonixKnightNFTContract = await new window.web3.eth.Contract(config.PhoenixKnightNFT_abi, config.PhoenixKnightNFT_address);
            let queryRet = await PhonixKnightNFTContract.methods.getTokenURIsFromIds(tokenIds).call();
           
            let evoNftUris = queryRet;
            console.log("[header useEffect] 11")
            let k; let metadata;
            for(k = 0 ; k < tokenIds.length; k++)
            {                
              metadata = await axios.get(evoNftUris[k]);
              nftItems.push({token_id:tokenIds[k], token_uri: evoNftUris[k], metadata:metadata.data });      
            };
            console.log("nftItems = ", nftItems)
          store.dispatch(updateEvoNFTList(nftItems));
      }else{
        store.dispatch(updateEvoNFTList());
      }
    }catch(error){
      store.dispatch(updateEvoNFTList());      
    }
  }
    
  export const getCountOfMintedNfts = async () => 
  {
    /*
      claim()
    */
      
    try 
    {
      let EvoManagerContract = await new window.web3.eth.Contract(config.PhoenixKnightNFT_abi, config.PhoenixKnightNFT_address);

      var count = 0;
       
      count = await EvoManagerContract.methods.getCountOfMintedNfts().call();

      store.dispatch(updateMintedNFTCountAfterTrading(count));
  
    } catch (error) {
      store.dispatch(updateMintedNFTCountAfterTrading(0));
  
    }
  }

  export const isWhiteListed = async (account) => 
  {
    /*
      isWhiteListed(account)
    */
      
    try 
    {
      let EvoManagerContract = await new window.web3.eth.Contract(config.PhoenixKnightNFT_abi, config.PhoenixKnightNFT_address);

      var gotWL = false;
       
      gotWL = await EvoManagerContract.methods.isWhiteListed(account).call();

      console.log("gotWL = ", gotWL);

      store.dispatch(updateIsWhitelisted(gotWL));
  
    } catch (error) {
      store.dispatch(updateIsWhitelisted(false));
  
    }
  }

  export const getNumberOfWLUsers = async () => 
  {
    /*
      getNumberOfWLUsers()
    */
      
    try 
    {
      let EvoManagerContract = await new window.web3.eth.Contract(config.PhoenixKnightNFT_abi, config.PhoenixKnightNFT_address);

      var curWLLen = 0;
       
      curWLLen = await EvoManagerContract.methods.getNumberOfWLUsers().call();

      console.log("curWLLen = ", curWLLen);

      store.dispatch(updteCurrentLenOfWL(curWLLen));
  
    } catch (error) {
      store.dispatch(updteCurrentLenOfWL(0));
  
    }
  }

  export const getMAXNumberOfWLUsers = async () => 
  {
    /*
      getMAXNumberOfWLUsers()
    */
      
    try 
    {
      let EvoManagerContract = await new window.web3.eth.Contract(config.PhoenixKnightNFT_abi, config.PhoenixKnightNFT_address);

      var maxWL = 0;
       
      maxWL = await EvoManagerContract.methods.getMAXNumberOfWLUsers().call();

      console.log("maxWL = ", maxWL);

      store.dispatch(updteMAXLenOfWL(maxWL));
  
    } catch (error) {
      store.dispatch(updteMAXLenOfWL(0));
  
    }
  }

export const addUser2WhiteList = async (currentAddr, fee) => 
{
  /*
   addUser2WhiteList(address addr)
  */

  try 
  {
    let EvoManagerContract = await new window.web3.eth.Contract(config.PhoenixKnightNFT_abi, config.PhoenixKnightNFT_address);
    let getting_wl_fee = window.web3.utils.toWei(fee !== null ? fee.toString() : '0', 'ether');

    console.log("getting_wl_fee = ", getting_wl_fee);
    
    var mint = EvoManagerContract.methods.addUser2WhiteList(currentAddr);
    let gasFee = await mint.estimateGas({ from: currentAddr, value: getting_wl_fee });
    var balanceOfUser = await window.web3.eth.getBalance(currentAddr);
    var gasPrice = 30 * (10 ** 9);

    if (balanceOfUser <= gasFee * gasPrice) {
      store.dispatch(setNFTTradingResult("getWL", false, "Insufficient balance." ));
    
      return {
        success : false,
        message : "Insufficient balance."
      }
    }
    await mint.send({ from: currentAddr, value: getting_wl_fee });

    store.dispatch(setNFTTradingResult("getWL", true, "Succeed in getting WL."));
    store.dispatch(updateIsWhitelisted(true));

    updateUserBalanceAfterTrading(currentAddr);

    return {
      success : true,
      message : "Succeed in getting WL."
    }
  } catch (error) {
    store.dispatch(setNFTTradingResult("getWL", false, parseErrorMsg(error.message) ));

    return {
      success : false,
      message : parseErrorMsg(error.message)
    }
  }
}
