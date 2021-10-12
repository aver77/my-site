import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../header';
import Main from '../main';
import MainAbout from '../main/mainAbout';
import MainProjects from '../main/mainProjects';
import MainSkills from '../main/mainSkills';

import './App.scss';

const App = () => {
    return (
        <Router>
            <Route path='/' component={Header}/>
            <Route path='/' component={Main}/>
            <Route path='/' component={MainAbout}/>
            <Route path='/' component={MainProjects}/>
            <Route path='/' component={MainSkills}/>
        </Router>
    );
}

export default App;
