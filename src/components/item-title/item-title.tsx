import * as React from 'react';
import './item-title.css';

interface IProp {
    children: string
}

export default class ItemTitle extends React.Component<IProp, {}> {
    public render() {
        return (
            <div>
                <h2 className='text-center title font-weight-bold'>{this.props.children}</h2>
                <hr/>
            </div>
        )
    }
}