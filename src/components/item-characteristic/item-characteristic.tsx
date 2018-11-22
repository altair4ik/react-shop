import * as React from 'react';
import './item-characteristic.css';

interface IProp {
    children: {
        title: string,
        value: string
    }
}

export default class ItemCharacteristic extends React.Component<IProp, {}> {
    public render() {
        const {title, value} = this.props.children;
        return (
            <div className='row'>
                <div className="col text-secondary">{title}:</div>
                <div className="col">{value}</div>
            </div>
        )
    }
}