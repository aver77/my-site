import React from "react";
import './footer.scss';
import tel from '../../images/svg/phoneLogo.png';
import mail from '../../images/svg/mailLogo.png';
import hh from '../../images//svg/hhLogo.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrapper __container">
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
                <div className="footer__unite-section">
                    <div className="footer__contact united-items">
                        <div className="footer__contact-title">
                            Contact:
                        </div>
                        <div className="footer__contact-section">
                            <div className="footer__section-tel contact-section_item">
                                <a target="noreferrer" href="tel:+79155438525"><img className="footer__tel-elem" src={tel} alt="phone" /></a>
                                <p className="footer__tel-elem-text">+7-915-543-85-25</p>
                            </div>
                            <div className="footer__section-mail contact-section_item">
                                <a target="noreferrer" href="mailto:dota.nikita@inbox.ru"><img className="footer__mail-elem" src={mail} alt="email" /></a>
                                <p className="footer__mail-elem-text">dota.nikita@inbox.ru</p>
                            </div>
                            <div className="footer__section-hh contact-section_item">
                                <a target="noreferrer" href="https://vk.com/away.php?to=https%3A%2F%2Fhh.ru%2Fresume%2F781e7e85ff09502eba0039ed1f53586e474b77&cc_key="><img className="footer__hh-elem" src={hh} alt="hh.ru" /></a>
                                <p className="footer__hh-elem-text">My job resume</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer__additional united-items">
                        <div className="footer__additional-title">
                            Additional:
                        </div>
                        <div className="footer__additional-text">
                            <p className="footer__additional-text-elem">
                                I am always ready for all the inquiries
                            </p>
                            <p className="footer__additional-text-elem">
                                I am ready to learn new technologies and approaches.
                            </p>
                            <p className="footer__additional-text-elem">
                                Don't hesitate and check my hh.ru profile,
                                call me or send a letter by e-mail.
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default Footer;