import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router';

function Layout(props) {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
}

export default Layout;