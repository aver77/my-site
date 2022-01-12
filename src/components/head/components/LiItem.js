import React, { memo } from 'react';

import '../index.scss';

const LiItem = ({liText, type, onClickHandler = null}) => {

    const liItemClickedHandler = () => {
        onClickHandler(true);
    }

    if (!onClickHandler) {
        return (
            <li tabIndex="0" className={`${type}__text`}>
                {liText}
            </li>
        )
    }
    return (
        <li onClick={liItemClickedHandler} tabIndex="0" className={`${type}__text`}>
            {liText}
        </li>
    );
};

export default memo(LiItem);