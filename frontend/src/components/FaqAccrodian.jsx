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
                        <span className="accordion__title">When Will Urban Futurists Officially Launch?</span>
                    </div>
                    <div className="panel">
                        <p>
                        Urban Futurists will officially launch on the TBD with a price of 0.5 ETH (Whitelisted) &amp; 0.07 ETH (Public Sale). Please make sure you don’t miss the launch by joining our Discord and Twitter. We will notify you when the project officially goes live.
                        </p>
                    </div>
                </div>
                <div className="accordion-wrapper">
                    <div className={selId === 2 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(2)
                    }}>
                    <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>  
                        <span className="accordion__title">Where Will The Funding From NFT’s Be Put To Use?</span>
                    </div>
                    <div className="panel">
                        <p>
                        The funds raised from the launch of Urban Futurists are detailed in our roadmap with the Virtual Symposium being planned immediately, the charitable component being distributed and funding for art and tech ventures being decided by the community. Further developments include an online shop with profits going into the DAO. This will only make your NFT worth more and ensure more people the desire to own one of the exclusive Urban Futurists.
                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 3 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(3)
                    }}>
                    <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>  
                        <span className="accordion__title">Can I Earn Money With My Urban Futurist NFT?</span>
                    </div>
                    <div className="panel">
                        <p>
                        Yes. We are absolutely committed to ensuring your NFT gains as much value as possible by strongly investing in the community and following our roadmap.
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
                        <span className="accordion__title">On Which Blockchain Will Urban Futurists Be Hosted?</span>
                    </div>
                    <div className="panel">
                        <p>
                        Urban Futurists is hosted on the Ethereum Blockchain. We chose this blockchain because of its security and decentralization. Ethereum gives an easy way to verify who owns the NFT.
                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 6 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(6)
                    }}>
                    <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>  
                        <span className="accordion__title">How many pieces will be sold ?</span>
                    </div>
                    <div className="panel">
                    <p>Total Supply – 5555 NFTs</p><p>Presale WL –&nbsp; 0.05 ETH&nbsp;<br></br>Public Sale –&nbsp; 0.07 ETH&nbsp;</p><p>Whitelist Spot – 2000<br></br>Giveaways – 200 pieces</p><p>Whales, Partners, Influencers – 100 pieces</p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 7 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(7)
                    }}>                        
                        <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>      
                        <span  className="accordion__title">How do I get on the Whitelist?</span>
                    </div>
                    <div className="panel">
                    <p>Please check the whitelist info on our Discord. It will be regularly updated.</p>
                    </div>
                </div>
                
                <div className="accordion-wrapper">
                    <div className={selId === 8 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(8)
                    }}>                        
                        <span className="elementor-toggle-icon"><i className="fas fa-caret-right"></i></span>      
                        <span  className="accordion__title">Is there a limit to mint?</span>
                    </div>
                    <div className="panel">
                    <p>Yes there will be a limit of 2 ‘Urban Futurists NFT’ per wallet during WL mint and a limit of 5 per wallet during the public sale.</p>
                    </div>
                </div>
            </div>
    );
}

export default FAQList;