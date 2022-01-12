import React from 'react';

const BurgerTitle = ({burgerCloseHandler, title}) => {

    const closeBtnHandler = () => {
        burgerCloseHandler(true);
    }

    return (
        <div className="burger__title">
            <p onClick={closeBtnHandler} className="burger__title-text">{title}</p>
        </div>
    );
};

export default BurgerTitle;