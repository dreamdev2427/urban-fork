import React, {useCallback, useState} from "react";

import './FaqAccrodianstyles.scss';

const FAQList = () => {
    
    const [selId, setSelId] = useState(-1);
    const clickItem = useCallback((index) => {
        if (selId === index) {
            setSelId(-1);
        } else {
            setSelId(index);
        }
    }, [selId])

    return (
            <div className="section-faq__content">
                <div className="accordion-wrapper">
                    <div className={selId === 1 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(1)
                    }}>
                    <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>  
                        <span className="accordion__title">When will Birds of Paradise officially launch?</span>
                    </div>
                    <div className="panel">
                        <p>
                        The launch of Birds of Paradise will be announced shortly. 
                        </p>
                    </div>
                </div>
                <div className="accordion-wrapper">
                    <div className={selId === 2 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(2)
                    }}>
                    <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>  
                        <span className="accordion__title">How much will each bird cost? </span>
                    </div>
                    <div className="panel">
                        <p>
                        3 AVAX for those on the whitelist<br></br>
                        5 AVAX for the public sale <br></br>
                        Please make sure to get whitelist access and don't miss the launch by joining our Discord and Twitter, we will notify you when the project officially goes LIVE. 
                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 3 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(3)
                    }}>
                    <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>  
                        <span className="accordion__title">How do I get on the Whitelist? </span>
                    </div>
                    <div className="panel">
                        <p>
                        Please check the whitelist information on Discord which will be updated regularly. 
                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 4 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(4)
                    }}>
                    <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>  
                        <span className="accordion__title">Can I earn money from my Birds of Paradise NFT?</span>
                    </div>
                    <div className="panel">
                        <p>
                        Yes, absolutely. You will earn native tokens by staking your Birds of Paradise NFT. We will also airdrop native tokens to all Birds of Paradise NFT holders. Your earnings will increase as the token and NFT values go up. 
                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 5 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(5)
                    }}>
                    <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>  
                        <span className="accordion__title">How do I know if this project is in good hands? </span>
                    </div>
                    <div className="panel">
                        <p>
                        Unlike many NFT projects, which are created anonymously, Birds of Paradise is backed by successful venture capitalists Phoenix Community Capital.inc (https://thephoenix.finance).    
                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 6 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(6)
                    }}>
                    <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>  
                        <span className="accordion__title">Is there a limit to the number I can mint? </span>
                    </div>
                    <div className="panel">
                        <p>
                        NO, during the presale there is no limit. You can mint as many as you wish to.   
                        </p>
                    </div>
                </div>

            </div>
    );
}

export default FAQList;