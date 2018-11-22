import * as React from "react";

import './header-menu-list-item.css'

export default class HeaderMenuListItem extends React.Component {
    public render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
            </li>
        );
    }
}