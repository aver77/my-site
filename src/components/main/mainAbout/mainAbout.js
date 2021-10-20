import React from "react";
import MainAboutCards from './mainAboutCards';
import Title from "./title";
import './mainAbout.scss';

const MainAbout =() => {
    return (
        <div id="about" className="main-about">
            {/* <div className="main-about__border"></div> */}
                <Title text='About me'/>
            <div className="main-about__info __container">
                <MainAboutCards/>
            </div>
        </div>
    )
}
export default MainAbout;