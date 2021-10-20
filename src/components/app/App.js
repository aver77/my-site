import React, { useEffect, useState } from 'react';
// import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../header';
import BurgerMenu from '../header/burgerMenu';
import Main from '../main';
import MainAbout from '../main/mainAbout';
import MainProjects from '../main/mainProjects';
import MainSkills from '../main/mainSkills';
import Development from '../development';
import Footer from '../footer';
import useWindowDimensions from '../windowSize/useWindowDemensions';

const View = () => {
    return (
        <>
            <Main/>
            <MainAbout id="about"/>
            <MainProjects id="projects"/>
            <MainSkills id="skills"/>
            <Development/>
            <Footer id="contact"/>
        </>
    )
}

const App = () => {

    const {width} = useWindowDimensions();
    const [displayWidth,changeDisplayWidth] = useState(0);

    useEffect(() => {
        changeDisplayWidth({width}.width);

        return 0;
    },[width, displayWidth]);

    if (displayWidth >= 800) {
        return (
            <>
                <Header id="header"/>
                <View/>
            </>
        )
    }
    return (
        <>
            <BurgerMenu id="header"/>
            <View/>
        </>
    )
}

export default App;



// const View = () => {
//     return (
//         <>
//             <Route path='/' component={Main}/>
//             <Route path='/' component={MainAbout}/>
//             <Route path='/' component={MainProjects}/>
//             <Route path='/' component={MainSkills}/>
//             <Route path='/' component={Development}/>
//             <Route path='/' component={Footer}/>
//         </>
//     )
// }

// const App = () => {

//     const {width} = useWindowDimensions();
//     const [displayWidth,changeDisplayWidth] = useState(0);

//     useEffect(() => {
//         changeDisplayWidth({width}.width);

//         return 0;
//     },[width, displayWidth]);

//     if (displayWidth >= 800) {
//         return (
//             <Router>
//                 <Route path='/' component={Header}/>
//                 <View/>
//             </Router>
//         )
//     }
//     return (
//         <Router>
//             <Route path='/' component={BurgerMenu} />
//             <View/>
//         </Router>
//     )
// }

// export default App;
