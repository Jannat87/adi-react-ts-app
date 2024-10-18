import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from '../pages/Public/HomePage';
import AboutPage from '../pages/Public/AboutPage';
import ContactPage from '../pages/Public/ContactPage';
import DevelopementProjectsPage from '../pages/Public/DevelopementProjectsPage';
import ProgramAndServicesPage from '../pages/Public/ProgramAndServicesPage';
import ArchivePage from '../pages/Public/ArchivePage';

const PublicRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/developement-projects" element={<DevelopementProjectsPage />} />
                    <Route path="/program-and-services" element={<ProgramAndServicesPage />} />
                    <Route path="/archive" element={<ArchivePage />} />
                </Routes>
            </Router>
        </> 
    );
};  

export default PublicRoutes;