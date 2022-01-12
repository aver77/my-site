import React, { memo } from 'react';
import { Link } from 'react-scroll';

const LinkItem = ({to, spy, smooth, offset = 0, duration, children}) => {
    return (
        <Link 
            to={to}
            spy={spy}
            smooth={smooth}
            offset={offset}
            duration={duration}
        >
            {children}
        </Link>
    );
};

export default memo(LinkItem);