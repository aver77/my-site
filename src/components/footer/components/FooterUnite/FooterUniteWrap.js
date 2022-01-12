import React, { memo } from 'react';
import FooterAditional from './FooterAdditional/FooterAditional';

import FooterContact from './FooterContact/FooterContact';

const FooterUniteWrap = () => {
    return (
        <div className="footer__unite-section">
            <FooterContact />
            <FooterAditional />
        </div>
    );
};

export default memo(FooterUniteWrap);