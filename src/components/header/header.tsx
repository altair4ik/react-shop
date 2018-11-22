import * as React from 'react';
import HeaderLogo from '../header-logo';
import HeaderMenuList from '../header-menu-list';
import HeaderToggleButton from '../header-toggle-button';

import './header.css'

export default class Header extends React.Component {

    public render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <HeaderLogo />
                <HeaderToggleButton />
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <HeaderMenuList />
                </div>
            </nav>
        )
    }

};