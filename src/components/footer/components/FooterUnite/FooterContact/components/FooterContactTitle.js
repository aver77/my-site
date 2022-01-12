import React, {memo} from 'react';

const FooterContactTitle = ({title}) => {
    return (
        <div className="footer__contact-title">
            {title}
        </div>
    );
};

export default memo(FooterContactTitle);