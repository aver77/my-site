import React, { useState } from "react";

import './mainProjects.scss';
import Title from "../mainAbout/title";
import Slider from "../../slider/Slider";
import TextSlider from "../../slider/textSlider";

const MainProjects = () => {

    const [index,setIndex] = useState(0);

    const updateIndex = (value) => {
        setIndex(value);
    } 

    return (
        <>
            <Title text='My projects'/>
            <div className="__container-slider">
                <div className="main-projects">
                    <div className="main-projects__slide">
                        <Slider updateData={updateIndex}/>
                    </div>
                    <div className="slider-cards">
                        <TextSlider currentIndex={index}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainProjects;