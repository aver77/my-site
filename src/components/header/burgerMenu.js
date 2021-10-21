import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import {CSSTransition} from "react-transition-group";
import burgerIcon from '../../images/svg/menuIcon.png';
import close from '../../images/svg/close.png';
import './index.scss';

const BurgerMenu = () => {

    const [burgerClosed, changeBurgerClosed] = useState(true);
    const [usualRender, changeUsualRender] = useState(true);
    const screenHeight = window.screen.height;

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        if (!burgerClosed) {
            changeUsualRender(false);
            document.body.style.overflow = "hidden";
        }
        if (burgerClosed) {
            changeUsualRender(true);
            document.body.style.overflow = "scroll";
        }
        
    },[burgerClosed,usualRender]);

    if (usualRender) {
        return (
            <div className="header">
                <div className="header__menu _container">
                        <p onClick={scrollToTop} className="header__title">NW Project</p>
                    <div className="header__burger">
                        <img 
                            onClick={() => {
                                    changeBurgerClosed(false); 
                                    window.scrollTo(0, 0);
                                }
                            } 
                            className="header__burger-line-item" 
                            src={burgerIcon} 
                            alt="burgerMenu" 
                        />
                    </div>
                </div>
            </div>
        )
    } 
    if (!usualRender) {
        return (
            <CSSTransition in={!usualRender} classNames='alert' timeout={500}>
                <div className="burger__navbar">
                    <div onClick={() => changeBurgerClosed(true)} className="burger__close">
                        <img className="burger__close-elem" src={close} alt="closeBtn" />
                    </div>
                    <div className="burger__title">
                        <p className="burger__title-text">NW Project</p>
                    </div>
                    <nav className="burger__navbar-elems">
                            <ul>
                                <Link 
                                    to="about"
                                    spy={false}
                                    smooth={true}
                                    offset={-80-screenHeight}
                                    duration={500}
                                >
                                    <li onClick={() => changeBurgerClosed(true)} tabIndex="0" className="burger__text">
                                        About
                                    </li>
                                </Link>
                                <Link 
                                    to="projects"
                                    spy={false}
                                    smooth={true}
                                    offset={-80-screenHeight}
                                    duration={500}
                                >
                                    <li onClick={() => changeBurgerClosed(true)} tabIndex="0" className="burger__text">
                                        Projects
                                    </li>
                                </Link>
                                <Link 
                                    to="skills"
                                    spy={false}
                                    smooth={true}
                                    offset={-80-screenHeight}
                                    duration={500}
                                >
                                    <li onClick={() => changeBurgerClosed(true)} tabIndex="0" className="burger__text">
                                        Skills
                                    </li>
                                </Link>
                                <Link 
                                    to="contact"
                                    spy={false}
                                    smooth={true}
                                    offset={-screenHeight}
                                    duration={500}
                                >
                                    <li onClick={() => changeBurgerClosed(true)} tabIndex="0" className="burger__text">
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                </div>
            </CSSTransition>
            )
        }

}

export default BurgerMenu;