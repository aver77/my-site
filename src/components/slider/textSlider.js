import React from "react";
import dot from '../../images/svg/dotIcon.svg';
import './Slider.scss';

const TextSlider = ({name,structure,technologies,technologiesTitle,listOfTechnologies}) => {
    return (
        <div className="slider-cards">
            <div className="slider-cards__projects-info">
                <div className="slider-cards__title">
                    <p className="slider-cards__text-title">UberEats</p>
                    <div className="slider-cards__border"></div>
                </div>
                <div className="slider-cards__text-for-slider">
                    <div className="slider-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>Structure: Adaptive layout</p>
                    </div>
                    <div className="slider-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>About: IT portal</p>
                    </div>
                    <div className="slider-cards__section">
                        <p>Using technologies:</p>
                    </div>
                    <div className="slider-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>HTML5, CSS3, JS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TextSlider;