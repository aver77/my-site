import React from "react";
import errPic from '../../images/errPic.jpg';
import './error.scss';

const Error = () => {
    return (
        <div className="error">
            <img className="error__picture" src={errPic} alt="Error" />
        </div>
    )
}
export default Error;