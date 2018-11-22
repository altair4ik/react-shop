import * as React from "react";
import {Link} from "react-router-dom";

import './header-logo.css'

export default class HeaderLogo extends React.Component {
    public render() {
        return (
            <Link to='/' className="navbar-brand">MouseShop</Link>
        );
    }
}