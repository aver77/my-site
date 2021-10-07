import React from "react";
import './mainAboutCards.scss';
import dot from '../../../../images/svg/dotIcon.svg';
import learning from '../../../../images/svg/learning.png';
import reading from '../../../../images/svg/reading.png';
import watching from '../../../../images/svg/watching.png';
import sport from '../../../../images/svg/sport2.png';

import instagram from '../../../../images/svg/instagram.png';
import telegram from '../../../../images/svg/telegram.png';
import vk from '../../../../images/svg/vk.png';
import youtube from '../../../../images/svg/youtube.png';

const MainAboutCards = () => {
    return (
        <div className="main-about-cards">
            <div className="main-about-cards__personal">
                <div className="main-about-cards__title">
                    <p className="main-about-cards__text-title">Personal</p>
                    <div className="main-about-cards__border"></div>
                </div>
                <div className="main-about-cards__text-personal">
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>Age: 20 years old</p>
                    </div>
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>Located in: Russia</p>
                    </div>
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>Total quantity of learning programming: more than 2 years</p>
                    </div>
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>Total quantity of learning Front-end: more than 1 year</p>
                    </div>
                </div>
            </div>
            <div className="main-about-cards__education">
                <div className="main-about-cards__title">
                    <p className="main-about-cards__text-title">Education</p>
                    <div className="main-about-cards__border"></div>
                </div>
                <div className="main-about-cards__text-education">
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>University: Voronezh State University</p>
                    </div>
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>Faculty: Fundamental IT and technologies</p>
                    </div>
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/><p>Current course: third</p>
                    </div>
                    <div className="main-about-cards__section">
                        <img className="dot" src={dot} alt="dot"/>
                        <p>Languages:</p>
                    </div>
                    <div className="main-about-cards__section-dots section__first-withdot">
                        <div>
                            <p className="lang__ru">Russian:</p>
                        </div>
                        <div className="main-about-cards__section-container-dots-ru">
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-black-dot"></span>
                        </div>
                    </div>
                    <div className="main-about-cards__section-dots section__second-withdot">
                        <div>
                            <p className="lang__eng">English:</p>
                        </div>
                        <div className="main-about-cards__section-container-dots-eng">
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-black-dot"></span>
                            <span className="main-about-cards__section-white-dot"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-about-cards__hobies">
                <div className="main-about-cards__title">
                    <p className="main-about-cards__text-title">Hobies</p>
                    <div className="main-about-cards__border"></div>
                </div>
                <div className="main-about-cards__section-hobbies">
                    <div className="main-about-cards__division-chapters">
                        <div className="main-about-cards__chapter-hobby">
                            <img className="main-about-cards__image-hobbies" src={learning} alt="learning" />
                            <p className="main-about-cards__text-hobbies">Learning</p>
                        </div>
                        <div className="main-about-cards__chapter-hobby">
                            <img className="main-about-cards__image-hobbies" src={reading} alt="learning" />
                            <p className="main-about-cards__text-hobbies">Reading</p>
                        </div>
                    </div>
                    <div className="main-about-cards__division-chapters cards__division-second">
                        <div className="main-about-cards__chapter-hobby">
                            <img className="main-about-cards__image-hobbies" src={watching} alt="learning" />
                            <p className="main-about-cards__text-hobbies">Series</p>
                        </div>
                        <div className="main-about-cards__chapter-hobby">
                            <img className="main-about-cards__image-hobbies" src={sport} alt="learning" />
                            <p className="main-about-cards__text-hobbies">Sports</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* united with hobbies */}
            <div className="main-about-cards__socials">
                <div className="main-about-cards__title">
                    <p className="main-about-cards__text-title">Socials</p>
                    <div className="main-about-cards__border"></div>
                </div>
                <div className="main-about-cards__section-hobbies">
                    <div className="main-about-cards__division-chapters">
                        <div className="main-about-cards__chapter-hobby">
                            <a className="main-about-cards__chapter-hobby-link" href="https://www.instagram.com/nikita.nwb/" target="noreferrer">
                                <img className="main-about-cards__image-hobbies" src={instagram} alt="learning" />
                                <p className="main-about-cards__text-hobbies">Instagram</p>
                            </a>
                        </div>
                        <div className="main-about-cards__chapter-hobby">
                            <a className="main-about-cards__chapter-hobby-link" href="https://t-do.ru/@NikitaNWB" target="noreferrer">
                                <img className="main-about-cards__image-hobbies" src={telegram} alt="learning" />
                                <p className="main-about-cards__text-hobbies">Telegram</p>
                            </a>
                        </div>
                    </div>
                    <div className="main-about-cards__division-chapters cards__division-second">
                        <div className="main-about-cards__chapter-hobby">
                            <a className="main-about-cards__chapter-hobby-link" href="https://vk.com/id142686682" target="noreferrer">
                                <img className="main-about-cards__image-hobbies" src={vk} alt="learning" />
                                <p className="main-about-cards__text-hobbies">VK</p>
                            </a>
                        </div>
                        <div className="main-about-cards__chapter-hobby">
                            <a className="main-about-cards__chapter-hobby-link" href="https://www.youtube.com/channel/UC9ocBXKY3JriLT939bWjaQQ" target="noreferrer">
                                <img className="main-about-cards__image-hobbies" src={youtube} alt="learning" />
                                <p className="main-about-cards__text-hobbies">YouTube</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainAboutCards