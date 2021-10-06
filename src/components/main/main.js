import React from "react";
import './main.scss';
import MainCard from "./mainCard/mainCard";
import profilePic from '../../images/footerAboutMePic.jpg';

const Main = () => {
    return (
        <div className="main">
            <div className="main__container">
                <div className="main__wrapper">
                    <MainCard image={profilePic} name="Nikita" surname="Averochkin" profession="Front-end developer"/>
                </div>
            </div>
        </div>
    )
}

export default Main;