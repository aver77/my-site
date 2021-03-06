import React, { useState } from "react";

import './mainProjects.scss';
import Title from "../mainAbout/MainTitle";
import Slider from "../../slider/Slider";
import TextSlider from "../../slider/textSlider";

const MainProjects = ({id}) => {

    const [index,setIndex] = useState(0);

    const updateIndex = (value) => {
        setIndex(value);
    } 

    return (
        <div id={id}>
            <Title text='My projects'/>
            <div className="__container">
                <div className="main-projects">
                    <div className="main-projects__slide">
                        <Slider updateData={updateIndex}/>
                    </div>
                    <div className="slider-cards">
                        <TextSlider currentIndex={index}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainProjects;