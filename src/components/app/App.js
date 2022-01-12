import React, { useEffect, useState } from 'react';
import Header from '../head/Header/header';
import BurgerMenu from '../head/Burger/burgerMenu';
import AppView from './AppView';
import useWindowDimensions from '../windowSize/useWindowDemensions';

const App = () => {

    const {width} = useWindowDimensions();
    const [displayWidth,changeDisplayWidth] = useState(0);

    useEffect(() => {
        changeDisplayWidth({width}.width);
    },[width, displayWidth]);

    return (
        <div className="components">
            { displayWidth >= 800?
                <>
                    <Header id="header"/>
                    <AppView/>
                </>
                :
                <>
                    <BurgerMenu id="header"/>
                    <AppView/>
                </>
            }
        </div>
    )
}

export default App;
