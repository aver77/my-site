import React from 'react';

import Main from '../main';
import MainAbout from '../main/mainAbout/mainAbout';
import MainProjects from '../main/mainProjects/MainProjects';
import MainSkills from '../main/mainSkills/MainSkills';
import Footer from '../footer';
import ModalOpener from '../modals/modalOpener';
import { memo } from 'react';

const AppView = () => {
    return (
        <>
            <Main/>
            <MainAbout id="about"/>
            <MainProjects id="projects"/>
            <MainSkills id="skills"/>
            <Footer id="contact"/>
            <ModalOpener/>
        </>
    )
}

export default memo(AppView);