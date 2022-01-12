import React, { memo } from 'react';

const MainCardBtn = ({href, text}) => {
    return (
        <button className="maincard__text-butn"><a target="noreferrer" href={href}>{text}</a></button>
    );
};

export default memo(MainCardBtn);