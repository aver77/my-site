import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import burgerIcon from '../../images/svg/menuIcon.png';
import close from '../../images/svg/close.png';
import './index.scss';

const BurgerMenu = () => {

    const [burgerClosed, changeBurgerClosed] = useState(true);
    const [usualRender, changeUsualRender] = useState(true);

    useEffect(() => {
        if (!burgerClosed) {
            changeUsualRender(false);
        }
        if (burgerClosed) {
            changeUsualRender(true);
        }

        return 0;
        
    },[burgerClosed,usualRender]);

    if (usualRender) {
        return (
            <div className="header">
                <div className="header__menu _container">
                    <Link to="/">
                        <p className="header__title">NW Project</p>
                    </Link>
                    <div className="header__burger">
                        <img onClick={() => {changeBurgerClosed(false); document.body.style.overflow = "hidden"}} className="header__burger-line-item" src={burgerIcon} alt="burgerMenu" />
                    </div>
                </div>
            </div>
        )
    } else return (
        <div className="burger__navbar">
            <div onClick={() => {changeBurgerClosed(true); document.body.style.overflow = "scroll"}} className="burger__close">
                <img className="burger__close-elem" src={close} alt="closeBtn" />
            </div>
            <div className="burger__title">
                <p className="burger__title-text">NW Project</p>
            </div>
            <nav className="burger__navbar-elems">
                    <ul>
                        <Link to="/">
                            <li tabIndex="0" className="burger__text">
                                About
                            </li>
                        </Link>
                        <Link to="/">
                            <li tabIndex="0" className="burger__text">
                                Projects
                            </li>
                        </Link>
                        <Link to="/">
                            <li tabIndex="0" className="burger__text">
                                Skills
                            </li>
                        </Link>
                        <Link to="/">
                            <li tabIndex="0" className="burger__text">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </nav>
        </div>
    )
}

export default BurgerMenu;