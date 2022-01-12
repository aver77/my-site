import React, {memo} from 'react';
import FooterAdditionalTextWrap from './components/FooterAdditionalTextWrap';
import FooterAdditionalTitle from './components/FooterAdditionalTitle';

const FooterAditional = () => {
    return (
        <div className="footer__additional united-items">
            <FooterAdditionalTitle title="Additional:"/>
            <FooterAdditionalTextWrap/>
        </div>
    );
};

export default memo(FooterAditional);