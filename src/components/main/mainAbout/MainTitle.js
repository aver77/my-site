import React, {memo} from "react";
import './mainAbout.scss';

const MainTitle = ({text}) => {
    return (
        <div className="__container">
            <div className="main-about__title">
                <p className="main-about__text-title ">{text}</p>
            </div>
            <div className="main-about__border"></div>
        </div>
    )
}
export default memo(MainTitle);