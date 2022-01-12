import React, {memo} from 'react';
import MainCardBtns from './mainCardBtns';
import MainCardText from './mainCardText';

const MainCardTextWrap = ({name, surname, profession}) => {
    return (
        <div className="maincard__text">
            <MainCardText text={name} about="name"/>
            <MainCardText text={surname} about="surname"/>
            <MainCardText text={profession} about="profession"/>
            <MainCardBtns/>
        </div>
    );
};

export default memo(MainCardTextWrap);