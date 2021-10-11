import React from "react";
import dot from '../../../../images/svg/dotIcon.svg';
import './mainAboutCards.scss';

const PrimalryCard = ({title,firstInfo,secondInfo,thirdInfo,fourthInfo,link=null}) => {

    return (
        <div className="main-about-cards__personal">
            <div className="main-about-cards__title">
                <p className="main-about-cards__text-title">{title}</p>
                <div className="main-about-cards__border"></div>
            </div>
            <div className="main-about-cards__text-personal">
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
                    <img className="dot" src={dot} alt="dot"/><p>{fourthInfo}</p>
                </div>
            </div>
        </div>
    )
}
export default PrimalryCard;