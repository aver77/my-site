import React, { memo } from "react";
import MainAboutCards from "./mainAboutCards/mainAboutCards";
import MainTitle from "./MainTitle";

import './mainAbout.scss';

const MainAbout = ({id}) => {
    return (
        <div id={id} className="main-about">
                <MainTitle text='About me'/>
            <div className="main-about__info __container">
                <MainAboutCards/>
            </div>
        </div>
    )
}
export default memo(MainAbout);