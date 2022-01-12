import React, { memo } from 'react';

import MainCardBtn from './mainCardBtn';

const MainCardBtns = () => {
    return (
        <div className="maincard__text-butns">
            <MainCardBtn href="https://github.com/aver77" text="GutHub"/>
            <MainCardBtn href="https://www.codewars.com/users/aver77" text="CodeWars"/>
        </div>
    );
};

export default memo(MainCardBtns);