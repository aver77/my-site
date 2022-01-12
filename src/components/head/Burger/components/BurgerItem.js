import React, { memo } from 'react';
import burgerIcon from '../../../../images/svg/menuIcon.png'

const BurgerItem = ({burgerClosedHandler}) => {
    const itemClickHandler = () => {
        burgerClosedHandler(false)
    }

    return (
        <div className="header__burger">
            <img 
                onClick={itemClickHandler}
                className="header__burger-line-item" 
                src={burgerIcon} 
                alt="burgerMenu" 
            />
        </div>
    );
};

export default memo(BurgerItem);