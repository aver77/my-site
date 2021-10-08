import React from "react";

import './mainProjects.scss';
import Title from "../mainAbout/title";
// import Slider from "../../slider";
import Slider from "../../slider/Slider";

const MainProjects = () => {
    return (
        <>
            <Title text='My projects'/>
            <div className="main-projects">
                <div className="main-projects__slide _container">
                    <Slider/>
                </div>
                <div className="main-projects__info _container">

                </div>
            </div>
        </>
    )
}
export default MainProjects;