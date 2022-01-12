import React, { memo } from 'react';

import LinkItem from './LinkItem';
import LiItem from './LiItem';

const NavItem = ({type, textType, onClickHandler = null}) => {
    return (
        <nav className={`${type}`}>
            <ul>
                <LinkItem
                    to="about"
                    spy={false}
                    smooth={true}
                    offset={-80}
                    duration={500}
                >
                    <LiItem type={textType} onClickHandler={onClickHandler} liText="About"/>
                </LinkItem>

                <LinkItem
                    to="projects"
                    spy={false}
                    smooth={true}
                    offset={-80}
                    duration={500}
                >
                    <LiItem type={textType} onClickHandler={onClickHandler} liText="Projects"/>
                </LinkItem>
                <LinkItem
                    to="skills"
                    spy={false}
                    smooth={true}
                    offset={-80}
                    duration={500}                
                >
                    <LiItem type={textType} onClickHandler={onClickHandler} liText="Skills"/>
                </LinkItem >
                <LinkItem
                    to="contact"
                    spy={false}
                    smooth={true}
                    duration={500}
                    liText="Contact"
                >
                    <LiItem type={textType} onClickHandler={onClickHandler} liText="Contact"/>
                </LinkItem>
            </ul>
        </nav>
    );
};
export default memo(NavItem);