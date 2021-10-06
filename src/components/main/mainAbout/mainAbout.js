import React from "react";
import MainAboutCards from './mainAboutCards';
import './mainAbout.scss';

const MainAbout =() => {
    return (
        <div className="main-about">
            {/* <div className="main-about__border"></div> */}
            <div className="_container">
                <div className="main-about__title">
                    <p className="main-about__text-title ">About me</p>
                </div>
                <div className="main-about__border"></div>
            </div>
            <div className="main-about__info _container">
                <MainAboutCards/>
            </div>
        </div>
    )
}
export default MainAbout;