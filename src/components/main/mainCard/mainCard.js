import React, { memo } from "react";
import MainCardImg from "./components/mainCardImg";
import MainCardTextWrap from "./components/mainCardTextWrap";

import './mainCard.scss';

const MainCard = ({name,surname,profession}) => {
    return (
        <div className="maincard__properties">
            <MainCardImg/>
            <MainCardTextWrap name={name} surname={surname} profession={profession}/>
        </div>
    )
}

export default memo(MainCard);