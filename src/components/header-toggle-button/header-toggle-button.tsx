import * as React from 'react';

import './header-toggle-button.css'

export default class HeaderToggleButton extends React.Component {
    public render() {
        return(
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
        );
    }
}