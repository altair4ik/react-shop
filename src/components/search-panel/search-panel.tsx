import * as React from 'react';

import './search-panel.css';
import {FormEvent} from "react";

interface IState {
    term: string
}

interface IProp {
    onSearchChange: (search: string) => void
}


export default class SearchPanel extends React.Component<IProp, IState> {

    constructor(props: IProp) {
        super(props);
        this.state = {term: ''}
    }

    public onTermChange = async (e: FormEvent<HTMLInputElement>) => {
        await this.setState({term: e.currentTarget.value});
        await this.props.onSearchChange(this.state.term);
    };

    public render() {
        return (
            <div className="search-panel text-center p-3">
                <h5>Search panel</h5>
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder='Search...'
                    value={this.state.term}
                    onChange={this.onTermChange}
                />
            </div>
        );
    }
}