import React, { memo } from 'react';

const MainCardText = ({text, about}) => {
    return (
        <p className={`maincard__text-${about}`}>{text}</p>
    );
};

export default memo(MainCardText);