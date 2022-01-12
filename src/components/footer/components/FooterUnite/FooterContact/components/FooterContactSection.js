import React, {memo} from 'react';

import tel from '../../../../../../images/svg/phoneLogo.png';
import mail from '../../../../../../images/svg/mailLogo.png';
import hh from '../../../../../../images/svg/hhLogo.svg';
import FooterContactTitle from './FooterContactTitle';
import FooterContactItem from './FooterContactItem';

const FooterContactSection = () => {
    return (
        <div className="footer__contact-section">
            <FooterContactTitle title="Contact:"/>
            <FooterContactItem link="tel" href="tel:+79155438525" imgSrc={tel} imgAlt="phone" text="+7-915-543-85-25"/>
            <FooterContactItem link="mail" href="mailto:aser-14@bk.ru" imgSrc={mail} imgAlt="email" text="aser-14@bk.ru"/>
            <FooterContactItem link="hh" href="https://voronezh.hh.ru/resume/5f865754ff096695120039ed1f327668454250" imgSrc={hh} imgAlt="phone" text="hh.ru"/>
        </div>
    );
};

export default memo(FooterContactSection);