import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../header';
import Main from '../main';
import MainAbout from '../main/mainAbout';

import './App.scss';

const App = () => {
    return (
        <Router>
            <Route path='/' component={Header}/>
            <Route path='/' component={Main}/>
            <Route path='/' component={MainAbout}/>
        </Router>
    );
}

export default App;
