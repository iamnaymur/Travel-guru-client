import React from 'react';
import Header from '../../Navbar/Header';
import { Outlet } from 'react-router-dom';

const IntroPage = () => {
    return (
        <div >
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default IntroPage;