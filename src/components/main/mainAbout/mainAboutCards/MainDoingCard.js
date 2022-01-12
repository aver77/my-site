import React, { memo } from "react";

const MainDoingCard = ({firstPic,firstText,secondPic,secondText,thirdPic,thirdText,fourthPic,fourthText}) => {
    return (
    <div className="main-about-cards__hobies">
        <div className="main-about-cards__title">
            <p className="main-about-cards__text-title">Hobies</p>
            <div className="main-about-cards__border"></div>
        </div>
        <div className="main-about-cards__section-hobbies">
            <div className="main-about-cards__division-chapters">
                <div className="main-about-cards__chapter-hobby">
                    <img className="main-about-cards__image-hobbies" src={firstPic} alt={firstText} />
                    <p className="main-about-cards__text-hobbies">{firstText}</p>
                </div>
                <div className="main-about-cards__chapter-hobby">
                    <img className="main-about-cards__image-hobbies" src={secondPic} alt={secondText} />
                    <p className="main-about-cards__text-hobbies">{secondText}</p>
                </div>
            </div>
            <div className="main-about-cards__division-chapters cards__division-second">
                <div className="main-about-cards__chapter-hobby">
                    <img className="main-about-cards__image-hobbies" src={thirdPic} alt={thirdText} />
                    <p className="main-about-cards__text-hobbies">{thirdText}</p>
                </div>
                <div className="main-about-cards__chapter-hobby">
                    <img className="main-about-cards__image-hobbies" src={fourthPic} alt={fourthText} />
                    <p className="main-about-cards__text-hobbies">{fourthText}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default memo(MainDoingCard);