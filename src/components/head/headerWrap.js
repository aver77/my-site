import React, { memo } from 'react';

const headerWrap = ({children}) => {
    return (
        <div className="header">
            <div className="header__menu _container">
                {children}
            </div>
        </div>
    );
};

export default memo(headerWrap);