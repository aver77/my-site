import React, { memo } from "react";
import './mainSkills.scss';

const SingleSkill = ({picture,singleClass,text = null}) => {
    
    return (
        <div className="main-skills-cont">
            <div className={singleClass}>
                <div className="main-skills__image-block">
                    <img className="main-skills__image-img" src={picture} alt="img"/>
                </div>
            </div>
            <div className="main-skills__info-text">
                <p className="main-skills__text">{text}</p>
            </div>
        </div>
    )
}

export default memo(SingleSkill);