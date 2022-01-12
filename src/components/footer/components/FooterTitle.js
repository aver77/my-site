import React, { memo } from 'react';

const FooterTitle = ({title}) => {
    return (
        <div className="footer__title">
            <p className="footer__title-text">{title}</p>
        </div>
    );
};

export default memo(FooterTitle);