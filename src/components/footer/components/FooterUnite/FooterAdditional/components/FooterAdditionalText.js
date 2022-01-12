import React, { memo } from 'react';

const FooterAdditionalText = ({text}) => {
    return (
        <p className="footer__additional-text-elem">
            {text}
        </p>
    );
};

export default memo(FooterAdditionalText);