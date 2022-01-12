import React, { memo } from 'react';
import FooterAdditionalText from './FooterAdditionalText';

const FooterAdditionalTextWrap = () => {
    return (
        <div className="footer__additional-text">
            <FooterAdditionalText text="I am always ready for all the inquiries"/>
            <FooterAdditionalText text="I am ready to learn new technologies and approaches."/>
            <FooterAdditionalText text="Don't hesitate and check my hh.ru profile, call me or send a letter by e-mail."/>
        </div>
    );
};

export default memo(FooterAdditionalTextWrap);