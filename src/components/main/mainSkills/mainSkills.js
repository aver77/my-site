import React from "react";
import './mainSkills.scss';
import Title from "../mainAbout/title";
import SingleSkill from "./singleSkill";
import html from '../../../images/svg/html.png';
import css from '../../../images/svg/css.png';
import js from '../../../images/svg/javascript.png';
import react from '../../../images/svg/react.png';

const MainSkills = () => {
    return (
        <>
            <Title text='My skills'/>
            <div className="_container">
                <div className="main-skills">
                    <SingleSkill picture={html} text="HTML5"/>
                    <SingleSkill picture={css} text="CSS3"/>
                    <SingleSkill picture={js} text="JavaScript"/>
                    <SingleSkill picture={react} text="React"/>
                </div>
            </div>
        </>
    )
}
export default MainSkills;