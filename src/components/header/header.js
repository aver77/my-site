import React from "react";
// import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { Link, animateScroll as scroll} from "react-scroll";

import './index.scss';

const Header = () => {

    // const [isBurger, checkIsBurger] = useState(false);
    // const [isBurgerOpened,checkIsBurgerOpened] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <div className="header">
            <div className="header__menu _container">
                    <p onClick={scrollToTop} className="header__title">NW Project</p>
                <nav className="header__nav">
                    <ul>
                        <Link 
                            to="about"
                            spy={false}
                            smooth={true}
                            offset={-80}
                            duration={500}
                        >
                            <li tabIndex="0" className="header__text">
                                About
                            </li>
                        </Link>
                        <Link 
                            to="projects"
                            spy={false}
                            smooth={true}
                            offset={-80}
                            duration={500}
                        >
                            <li tabIndex="0" className="header__text">
                                Projects
                            </li>
                        </Link>
                        <Link 
                            to="skills"
                            spy={false}
                            smooth={true}
                            offset={-80}
                            duration={500}
                        >
                            <li tabIndex="0" className="header__text">
                                Skills
                            </li>
                        </Link>
                        <Link 
                            to="contact"
                            spy={false}
                            smooth={true}
                            duration={500}
                        >
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