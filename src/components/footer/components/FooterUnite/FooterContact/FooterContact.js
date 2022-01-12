import React, {memo} from 'react';

import FooterContactSection from './components/FooterContactSection';

const FooterContact = () => {
    return (
        <div className="footer__contact united-items">
            <FooterContactSection />
        </div>
    );
};

export default memo(FooterContact);