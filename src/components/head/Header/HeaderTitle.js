import React, { memo } from 'react';

const HeaderTitle = ({onClickHandler, title}) => {
    return (
        <p onClick={onClickHandler} className="header__title">{title}</p>
    );
};
export default memo(HeaderTitle);