// eslint-disable-next-line
import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import Spinner from "../../spinner/spinner";
// eslint-disable-next-line
import Error from "../../error";
import './mainCard.scss';

const MainCard = ({image,name,surname,profession}) => {
  
    const [loading,checkLoading] = useState(true);
    const [error,checkError] = useState(false);

    useEffect (() => {
        if (image) {
            checkLoading(false);
        } else {
            checkLoading(false);
            checkError(true);
        }
    },[image])

    if (loading && !error) {
        return (
            <Spinner/>
        )
    }
    if (!loading && error) {
        return (
            <Error/>
        )
    }

    return (
        <div className="maincard__properties">
            <div className="maincard__image">
                <img className="maincard__picture" src={image} alt="my profile" />
            </div>
            <div className="maincard__text">
                <p className="maincard__text-name">{name}</p>
                <p className="maincard__text-surname">{surname}</p>
                <p className="maincard__text-profession">{profession}</p>
                <div className="maincard__text-butns">
                    <button className="maincard__text-butn"><a target="noreferrer" href="https://github.com/aver77">GitHub</a></button>
                    <button className="maincard__text-butn"><a target="noreferrer" href="https://www.codewars.com/users/aver77">CodeWars</a></button>
                </div>
            </div>
        </div>
    )
}

export default MainCard;