import React from "react";
import { Link } from 'react-router-dom';

import './index.scss';

const Header = () => {

    // const [isBurger, checkIsBurger] = useState(false);
    // const [isBurgerOpened,checkIsBurgerOpened] = useState(false);

    return (
        <div className="header">
            <div className="header__menu _container">
                <Link to="/">
                    <p className="header__title">NW Project</p>
                </Link>
                <nav className="header__nav">
                    <ul>
                        <Link to="/">
                            <li tabIndex="0" className="header__text">
                                About
                            </li>
                        </Link>
                        <Link to="/">
                            <li tabIndex="0" className="header__text">
                                Projects
                            </li>
                        </Link>
                        <Link to="/">
                            <li tabIndex="0" className="header__text">
                                Skills
                            </li>
                        </Link>
                        <Link to="/">
                            <li tabIndex="0" className="header__text">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Header;