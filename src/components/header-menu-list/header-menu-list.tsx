import * as React from 'react';
import HeaderMenuListItem from '../header-menu-list-item';

import './header-menu-list.css'

export default class HeaderMenuList extends React.Component {

    public render() {
        return (
            <ul className="navbar-nav mr-auto">
                <HeaderMenuListItem />
            </ul>
        )
    }

};