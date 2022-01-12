import React, {memo} from 'react';

const FooterContactItem = ({link, href, imgSrc, imgAlt, text}) => {
    return (
        <div className={`footer__section-${link} contact-section_item`}>
            <a target="noreferrer" href={href}><img className={`footer__${link}-elem`} src={imgSrc} alt={imgAlt} /></a>
            <p className={`footer__${link}-elem-text`}>{text}</p>
        </div>
    );
};

export default memo(FooterContactItem);