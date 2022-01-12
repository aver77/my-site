import React from 'react';

import close from '../../../../images/svg/close.png';

const BurgerClose = ({burgerCloseHandler}) => {
    const closeBtnHandler = () => {
        burgerCloseHandler(true);
    }

    return (
        <div onClick={closeBtnHandler} className="burger__close">
            <img className="burger__close-elem" src={close} alt="closeBtn" />
        </div>
    );
};

export default BurgerClose;