import React from "react";
// import MainItems from "./mainItems";

import './main.scss'
import ProfilePic from '../../images/footerAboutMePic.jpg'

const Main = () => {
    return (
        <div className="main">
            <div className="main__info container">
                <div className="main__description-profile">
                    <div className="main__description-image">
                        <img className="main__profile-pic" src={ProfilePic} alt="my profile page" />
                    </div>
                    <div className="main__description-items">
                        <p className="main__text-name">Nikita</p>
                        <p className="main__text-surname">Averochkin</p>
                        <p className="main__text-profession">Front-end developer</p>
                    </div>
                </div>
                <div className="main__description-about-me">
                    <div className="main__about-linked-title">
                        <div className="main__about-title">
                            <p className="main__about-title_text">About me:</p>
                        </div>
                        <div className="main__about-title_border"></div>
                    </div>
                    <div className="main__about-section">
                        <div className="main__text-properties">
                            <p className="main__about-text"><span className="main__text-colored_grey">Hello!</span> I am 20 years old student from Russia</p>
                            <p className="main__about-text"><span className="main__text-colored_grey">On the third grade at:</span> Voronezh State University</p>
                            <p className="main__about-text"><span className="main__text-colored_grey">University programm direction:</span> Informatic technologies</p>
                            <p className="main__about-text"><span className="main__text-colored_grey">My own speciality:</span> Front-end development</p>
                            <p className="main__about-text"><span className="main__text-colored_grey">Total quantity of time IT learning:</span> more than 2 years</p>
                            <p className="main__about-text"><span className="main__text-colored_grey">Total quantity of time learning Front-end:</span> more than 1 year</p>
                            <p className="main__about-text"><span className="main__text-colored_grey">GitHub link:</span><a className="main__about-text_link" rel="noreferrer" target="_blank" href="https://github.com/aver77"> www.codewars.com/users/aver77</a></p>
                            <p className="main__about-text"><span className="main__text-colored_grey">CodeWars link:</span><a className="main__about-text_link" rel="noreferrer" target="_blank" href="https://github.com/aver77"> https://github.com/aver77</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;