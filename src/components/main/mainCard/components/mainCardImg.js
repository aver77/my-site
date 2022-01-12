import React, { memo } from 'react';

import profilePic from '../../../../images/footerAboutMePic.jpg';

const MainCardImg = () => {
    return (
        <div className="maincard__image">
            <img className="maincard__picture" src={profilePic} alt="my profile" />
        </div>
    );
};

export default memo(MainCardImg);