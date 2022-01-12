import React, { memo } from "react";

const MainEducationCard = ({dot,title,firstInfo,secondInfo,thirdInfo,firstLang,secondLang,link=null}) => {
    return (
        <div className="main-about-cards__education">
        <div className="main-about-cards__title">
            <p className="main-about-cards__text-title">{title}</p>
            <div className="main-about-cards__border"></div>
        </div>
        <div className="main-about-cards__text-education">
            <div className="main-about-cards__section">
                <img className="dot" src={dot} alt="dot"/><p>{firstInfo}</p>
            </div>
            <div className="main-about-cards__section">
                <img className="dot" src={dot} alt="dot"/><p>{secondInfo}</p>
            </div>
            <div className="main-about-cards__section">
                <img className="dot" src={dot} alt="dot"/><p>{thirdInfo}</p>
            </div>
            <div className="main-about-cards__section">
                <img className="dot" src={dot} alt="dot"/>
                <p>Languages:</p>
            </div>
            <div className="main-about-cards__section-dots section__first-withdot">
                <div>
                    <p className="lang__ru">{firstLang}:</p>
                </div>
                <div className="main-about-cards__section-container-dots-ru">
                    <span className="main-about-cards__section-black-dot"></span>
                    <span className="main-about-cards__section-black-dot"></span>
                    <span className="main-about-cards__section-black-dot"></span>
                    <span className="main-about-cards__section-black-dot"></span>
                    <span className="main-about-cards__section-black-dot"></span>
                </div>
            </div>
            <div className="main-about-cards__section-dots section__second-withdot">
                <div>
                    <p className="lang__eng">{secondLang}:</p>
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
    )
}
export default memo(MainEducationCard);

