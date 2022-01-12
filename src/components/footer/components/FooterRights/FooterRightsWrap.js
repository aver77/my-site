import React from 'react';
import { memo } from 'react';

const FooterRightsWrap = ({children}) => {
    return (
        <div className="footer__rights">
            {children}
        </div>
    );
};

export default memo(FooterRightsWrap);