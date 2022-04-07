import React from "react";

import './styles.scss';

const HomeTeam = () => {
    return <section id="section-team" className="section-team section">
        <div className="section-team__inner">
            <div className="section-team__content">
                <div className="members">
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
                        <p  style={{ color: "white" }} >Co-Founder</p>
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
                        <p  style={{ color: "white" }} >Co-Founder</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default HomeTeam;