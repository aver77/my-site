import React, {memo} from 'react';

const FooterAdditionalTitle = ({title}) => {
    return (
        <div className="footer__additional-title">
            {title}
        </div>
    );
};

export default memo(FooterAdditionalTitle);