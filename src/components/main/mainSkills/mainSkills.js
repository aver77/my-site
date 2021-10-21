import React from "react";
import './mainSkills.scss';
import Title from "../mainAbout/title";
import SingleSkill from "./singleSkill";
import html from '../../../images/svg/html.png';
import css from '../../../images/svg/css.png';
import js from '../../../images/svg/javascript.png';
import react from '../../../images/svg/react.png';

const MainSkills = ({id}) => {
    return (
        <div id={id}>
            <Title text='My skills'/>
            <div className="_container">
                <div className="main-skills">
                    <SingleSkill picture={html} text="HTML5" singleClass="main-skills__cont-border main-skills__border-1"/>
                    <SingleSkill picture={css} text="CSS3" singleClass="main-skills__cont-border main-skills__border-2"/>
                    <SingleSkill picture={js} text="JavaScript" singleClass="main-skills__cont-border main-skills__border-3"/>
                    <SingleSkill picture={react} text="React" singleClass="main-skills__cont-border main-skills__border-4"/>
                </div>
            </div>
        </div>
    )
}
export default MainSkills;