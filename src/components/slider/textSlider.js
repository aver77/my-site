import React from "react";
import dot from '../../images/svg/dotIcon.svg';
import dataSlider from "./dataSlider";
import './Slider.scss';

const TextSlider = ({currentIndex}) => {

    const {title,structure,about,listOfTechnologies,link} = dataSlider[currentIndex];

    return (
        <div className="slider-cards__projects-info">
            <div className="slider-cards__title">
                <p className="slider-cards__text-title">{title}</p>
                <div className="slider-cards__border"></div>
            </div>
            <div className="slider-cards__text-for-slider">
                <div className="slider-cards__section">
                    <img className="dot" src={dot} alt="dot"/><p>Structure: {structure}</p>
                </div>
                <div className="slider-cards__section">
                    <img className="dot" src={dot} alt="dot"/><p>About: {about}</p>
                </div>
                <div className="slider-cards__section">
                    <p>Using technologies:</p>
                </div>
                <div className="slider-cards__section">
                    <img className="dot" src={dot} alt="dot"/><p>{listOfTechnologies}</p>
                </div>
                <div className="slider-cards__section">
                    <p className="with-butn">
                        Find project:
                        <button className="slider-cards__text-butn"><a target="noreferrer" href={link}>Link</a></button>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default TextSlider;