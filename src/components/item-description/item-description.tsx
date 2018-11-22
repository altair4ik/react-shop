import * as React from 'react';
import './item-description.css';

interface IProp {
    children: string
}

export default class ItemDescription extends React.Component<IProp, {}> {
    public render() {
        return (
            <p>{this.props.children}</p>
        )
    }
}