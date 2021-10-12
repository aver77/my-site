import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../header';
import Main from '../main';
import MainAbout from '../main/mainAbout';
import MainProjects from '../main/mainProjects';
import MainSkills from '../main/mainSkills';
import Development from '../development';

import './App.scss';

const App = () => {
    return (
        <Router>
            <Route path='/' component={Header}/>
            <Route path='/' component={Main}/>
            <Route path='/' component={MainAbout}/>
            <Route path='/' component={MainProjects}/>
            <Route path='/' component={MainSkills}/>
            <Route path='/' component={Development}/>
        </Router>
    );
}

export default App;
