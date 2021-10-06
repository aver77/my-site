import React from "react";
import './mainAboutCards.scss';
import dot from '../../../../images/svg/dotIcon.svg';

const MainAboutCards = () => {
    return (
        <div className="main-about-cards">
            <div className="main-about-cards__personal">
                <div className="main-about-cards__title">
                    <p className="main-about-cards__text-title">Personal</p>
                    <div className="main-about-cards__border"></div>
                </div>
                <div className="main-about-cards__text-personal">
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>Age: 20 years old</p>
                    </div>
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>Located in: Russia</p>
                    </div>
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>Main speciality: Front-end</p>
                    </div>
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>Total quantity of learning programming: more than 2 years</p>
                    </div>
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>Total quantity of learning Front-end: more than 1 year</p>
                    </div>
                </div>
            </div>
            <div className="main-about-cards__education">
                <div className="main-about-cards__title">
                    <p className="main-about-cards__text-title">Education</p>
                    <div className="main-about-cards__border"></div>
                </div>
                <div className="main-about-cards__text-education">
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>University: Voronezh State University</p>
                    </div>
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>Program direction: Informatic technologies</p>
                    </div>
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>Current term: third</p>
                    </div>
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/>
                        <p>Languages:</p>
                    </div>
                    <div className="main-about-cards__section-dots section__first-withdot">
                        <div>
                            <p className="lang__ru">Russian:</p>
                        </div>
                        <div className="main-about-cards__section-container-dots-ru">
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-black-dot"></span>
                        </div>
                    </div>
                    <div className="main-about-cards__section-dots">
                        <div>
                            <p className="lang__eng">English:</p>
                        </div>
                        <div className="main-about-cards__section-container-dots-eng">
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-white-dot"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-about-cards__hobies">
                <div className="main-about-cards__title">
                    <p className="main-about-cards__text-title">Hobies</p>
                    <div className="main-about-cards__border"></div>
                </div>
                <div className="main-about-cards__text-hobbies">
                    
                </div>
            </div>
            <div className="main-about-cards__socials">
                <div className="main-about-cards__title">
                    <p className="main-about-cards__text-title">Socials</p>
                    <div className="main-about-cards__border"></div>
                </div>
                <div className="main-about-cards__text-socials">
                    
                </div>
            </div>
        </div>
    )
}
export default MainAboutCards