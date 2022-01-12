import React from 'react';
import { memo } from 'react';

const FooterRights = ({point, text}) => {
    return (
        <p className={`footer__rights-text-${point}`}>
            {text}
        </p>
    );
};

export default memo(FooterRights);