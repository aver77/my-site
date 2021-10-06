import React from "react";
import errPic from '../../images/errPic.jpg';
import './error.scss';

const Error = () => {
    return (
        // <div className="error alert alert-danger" role="alert">
        //     <h4 className="alert-heading">
        //         Error!
        //     </h4>
        //     <p>Ooops...Something went wrong!</p>
        // </div>
        <div className="error">
            <img className="error__picture" src={errPic} alt="Error" />
        </div>
    )
}
export default Error;