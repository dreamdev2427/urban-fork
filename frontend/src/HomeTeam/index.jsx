import React from "react";

import './styles.scss';

const HomeTeam = () => {
    return <section id="section-team" className="section-team section">
        <div className="section-team__inner">
            <div className="section-team__content">
                <div className="members">
                    <div className="member">
                        <div className="member__photo">
                            <img src="/img/anil-thapa.jpg"/>
                            <a
                                href="https://twitter.com/TheParadiseAnil"
                                className="member__link"
                                target="_blank"
                            >
                                <i className="fab fa-twitter" style={{ color: "red" }} />
                            </a>
                        </div>
                        <p  style={{ color: "white", fontSize: 20, }} >Anil Thapa</p>
                        <p  style={{ color: "white" }} >Founder</p>
                    </div>
                    <div className="member">
                        <div className="member__photo">
                            <img src="/img/luke-sullivan.png"/>
                            <a
                                href="https://www.linkedin.com/in/luke-sullivan-0750b7aa/"
                                className="member__link"
                                target="_blank"
                            >
                                <i className="fab fa-linkedin" style={{ color: "red" }} />
                            </a>
                        </div>
                        <p  style={{ color: "white", fontSize: 20, }} >Luke Sullivan</p>
                        <p  style={{ color: "white" }} >Advisor</p>
                    </div>
                    <div className="member">
                        <div className="member__photo">
                            <img src="/img/eric-marshall.png"/>
                            <a
                                href="https://www.linkedin.com/in/ericcmarshall/"
                                className="member__link"
                                target="_blank"
                            >
                                <i className="fab fa-linkedin" style={{ color: "red" }} />
                            </a>
                        </div>
                        <p  style={{ color: "white", fontSize: 20, }} >Eric Marshall</p>
                        <p  style={{ color: "white" }} >Advisor</p>
                    </div>
                    <div className="member">
                        <div className="member__photo">
                            <img src="/img/venus.jpg"/>
                            {/* <a
                                href="#"
                                className="member__link"
                                target="_blank"
                            >
                                <i className="fab fa-twitter" style={{ color: "red" }} />
                            </a> */}
                        </div>
                        <p  style={{ color: "white", fontSize: 20, }} >Caspar Herrmann</p>
                        <p  style={{ color: "white" }} >Developer</p>
                    </div>
                    <div className="member">
                        <div className="member__photo">
                            <img src="/img/elizabeth.jpg"/>
                            <a
                                href="https://twitter.com/BOP_Eli"
                                className="member__link"
                                target="_blank"
                            >
                                <i className="fab fa-twitter" style={{ color: "red" }} />
                            </a>
                        </div>
                        <p  style={{ color: "white", fontSize: 20, }} >Elizabeth Quismorio</p>
                        <p  style={{ color: "white" }} >CMO ( Cheif Marketing Officer)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default HomeTeam;