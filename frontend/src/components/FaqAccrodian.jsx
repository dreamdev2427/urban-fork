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
                        <span className="accordion__title">When will Phoenix knights officially launch?</span>
                    </div>
                    <div className="panel">
                        <p>
                        Phoenix knights will officially launch on the TBA with the Price of 3 AVAX for (Whitelisted) & 5 AVAX (public Sale) Please make sure to get whitelist access and don’t miss the launch by joining our discord and Twitter, we will notify you when the project officially goes LIVE.
                        </p>
                    </div>
                </div>
                <div className="accordion-wrapper">
                    <div className={selId === 2 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(2)
                    }}>
                    <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>  
                        <span className="accordion__title">Can I earn money from my Phoenix knights NFT?</span>
                    </div>
                    <div className="panel">
                        <p>
                        YES Absolutely you will earn native tokens by staking your Phoenix knights NFT also we will airdrop out native tokens for all Phoenix knights NFT holders, you will also earn more as token and NFT values goes up.
                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 3 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(3)
                    }}>
                    <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>  
                        <span className="accordion__title">How do I know if this project is in good hands?</span>
                    </div>
                    <div className="panel">
                        <p>
                        Great Question, Unlike many NFT projects, which are made by anonymous, Phoenix knights is Backed by Phoenix community capital, Visit (https://thephoenix.finance) Phoenix Community Capital, Inc is a very successful Project.
                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 4 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(4)
                    }}>
                    <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>  
                        <span className="accordion__title">How Do I Know If This Project Is In Good Hands?</span>
                    </div>
                    <div className="panel">
                        <p data-nsfw-filter-status="swf">
                        Great question. Unlike many NFT’s that are made by the anonymous, this project is driven by Brad Blaze, already a successful artist and entertainer who has turned over millions of dollars from his art ventures.</p><p style={{ textAlign: "justify" }} >Already in high demand and believing in this project so much, he is altering his performances with Virtual Reality performances at live events. There will be a particular emphasis on NFT growth and this project in his new keynote. 
                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 5 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(5)
                    }}>
                    <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>  
                        <span className="accordion__title">How do I get on the Whitelist?</span>
                    </div>
                    <div className="panel">
                        <p>
                        Please Check out the Whitelist info in Discord we will update it regularly.
                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 6 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(6)
                    }}>
                    <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>  
                        <span className="accordion__title">Is there a Limit to Mint?</span>
                    </div>
                    <div className="panel">
                        <p>
                        NO No limit to mint during Presale, you can mint as many as you wish to     
                        </p>
                    </div>
                </div>

            </div>
    );
}

export default FAQList;