import React, {memo} from "react";

const MainSocialsCard = ({firstPic,firstLink,firstText,secondPic,secondLink,secondText,thirdPic,thirdLink,thirdText,fourthPic,fourthLink,fourthText}) => {
    return (
        <div className="main-about-cards__socials">
        <div className="main-about-cards__title">
            <p className="main-about-cards__text-title">Socials</p>
            <div className="main-about-cards__border"></div>
        </div>
        <div className="main-about-cards__section-hobbies">
            <div className="main-about-cards__division-chapters">
                <div className="main-about-cards__chapter-hobby">
                    <a className="main-about-cards__chapter-hobby-link" href={firstLink} target="noreferrer">
                        <img className="main-about-cards__image-hobbies" src={firstPic} alt={firstText} />
                        <p className="main-about-cards__text-hobbies">{firstText}</p>
                    </a>
                </div>
                <div className="main-about-cards__chapter-hobby">
                    <a className="main-about-cards__chapter-hobby-link" href={secondLink} target="noreferrer">
                        <img className="main-about-cards__image-hobbies" src={secondPic} alt={secondText} />
                        <p className="main-about-cards__text-hobbies">{secondText}</p>
                    </a>
                </div>
            </div>
            <div className="main-about-cards__division-chapters cards__division-second">
                <div className="main-about-cards__chapter-hobby chapter-hobby-division-second">
                    <a className="main-about-cards__chapter-hobby-link" href={thirdLink} target="noreferrer">
                        <img className="main-about-cards__image-hobbies" src={thirdPic} alt={thirdText} />
                        <p className="main-about-cards__text-hobbies">{thirdText}</p>
                    </a>
                </div>
                <div className="main-about-cards__chapter-hobby">
                    <a className="main-about-cards__chapter-hobby-link" href={fourthLink} target="noreferrer">
                        <img className="main-about-cards__image-hobbies" src={fourthPic} alt={fourthText} />
                        <p className="main-about-cards__text-hobbies">{fourthText}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default memo(MainSocialsCard);