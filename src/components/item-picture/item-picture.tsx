import * as React from 'react';

import './item-picture.css';

interface IProp {
    children: string
}

export default class ItemPicture extends React.Component<IProp, {}> {
    public render() {
        return (
            <div className="col-md-10 item-picture">
                <img width='50%' src={this.props.children} alt=""/>
            </div>
        );
    }
}