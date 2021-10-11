import React from "react";

import './mainProjects.scss';
import Title from "../mainAbout/title";
// import Slider from "../../slider";
import Slider from "../../slider/Slider";
import TextSlider from "../../slider/textSlider";

const MainProjects = () => {
    return (
        <>
            <Title text='My projects'/>
            <div className="_container-slider">
                <div className="main-projects">
                    <div className="main-projects__slide">
                        <Slider/>
                    </div>
                    <div className="main-projects__info">
                        <TextSlider/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainProjects;