import React, {memo} from 'react';

const BurgerWrap = ({children}) => {
    return (
        <div className="burger__navbar fadeIn">
            {children}
        </div>
    );
};

export default memo(BurgerWrap);