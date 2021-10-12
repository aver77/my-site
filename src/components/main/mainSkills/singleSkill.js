import React from "react";
import './mainSkills.scss';

const SingleSkill = ({picture,text = null}) => {
    return (
        <div className="main-skills-cont">
        <div className="main-skills__cards">
            <div className="main-skills__info-image">
                <img className="main-skills__image" src={picture} alt="img" />
            </div>
            {/* <div className="main-skills__info-text">
                <p className="main-skills__text">{text}</p>
            </div> */}
        </div>
            <div className="main-skills__info-text">
                <p className="main-skills__text">{text}</p>
            </div>
        </div>
    )
}

export default SingleSkill;