import React, { memo } from "react";
import './main.scss';
import MainCard from "./mainCard/mainCard";

const Main = () => {
    return (
        <div className="main">
            <div className="main__container">
                <div className="main__wrapper">
                    <MainCard name="Nikita" surname="Averochkin" profession="Front-end developer"/>
                </div>
            </div>
        </div>
    )
}

export default memo(Main);