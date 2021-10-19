import React from "react";
import { Link } from 'react-router-dom';
import './index.scss';

const BurgerMenu = () => {
    return (
        <div className="header">
            <div className="header__menu _container">
                <Link to="/">
                    <p className="header__title">NW Project</p>
                </Link>
            </div>
        </div>
        )
}

export default BurgerMenu;