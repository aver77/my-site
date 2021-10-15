import React from "react";
import './footer.scss';
import tel from '../../images/svg/phoneLogo.png';
import mail from '../../images/svg/mailLogo.png';
import hh from '../../images//svg/hhLogo.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrapper _container">
                <div className="footer__title">
                    <p className="footer__title-text">NW Project</p>
                </div>
                <div className="footer__rights">
                    <p className="footer__rights-text-start">
                        All rights reserved
                    </p>
                    <p className="footer__rights-text-end">
                        copyright © 2021
                    </p>
                </div>
                <div className="footer__contact">
                    <div className="footer__contact-title">
                        Contact me:
                    </div>
                    {/* <div className="footer__extra-section"> */}
                        <div className="footer__contact-section">
                            <div className="footer__section-tel contact-section_item">
                                <a target="noreferrer" href="tel:+79155438525"><img className="footer__tel-elem" src={tel} alt="phone" /></a>
                            </div>
                            <div className="footer__section-mail contact-section_item">
                                <a target="noreferrer" href="mailto:dota.nikita@inbox.ru"><img className="footer__mail-elem" src={mail} alt="email" /></a>
                            </div>
                            <div className="footer__section-hh contact-section_item">
                                <a target="noreferrer" href="https://vk.com/away.php?to=https%3A%2F%2Fhh.ru%2Fresume%2F781e7e85ff09502eba0039ed1f53586e474b77&cc_key="><img className="footer__hh-elem" src={hh} alt="hh.ru" /></a>
                            </div>
                        </div>
                        <div className="footer__contact-number">
                            +7-915-543-85-25
                        </div>
                    {/* </div> */}
                </div>
            </div> 
        </div>
    )
}
export default Footer;