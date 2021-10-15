import React, { useState } from "react";
import close from '../../images/svg/close.png';
import './index.scss';

const Development = () => {

    const [closeDev,changeCloseDev] = useState(true);

    if (closeDev) {
        return (
            <div className="development">
                <div onClick={() => changeCloseDev(false)} className="development__close">
                    <img className="development__icon-close" src={close} alt="close" />
                </div>
                <p className="development__text">
                    This website is under construction...
                </p>
            </div>
        )
    } else return null;
}
export default Development;