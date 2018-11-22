import * as React from 'react';

import './item-thumb.css';

interface IProp {
    children: string,
    changePicture: (path: string, idx: number) => void,
    active: boolean,
    idx: number
}

export default class ItemThumb extends React.Component<IProp, {}> {
    public changePicture = () => {
        this.props.changePicture(this.props.children, this.props.idx);
        console.log('active', this.props.active)
    };

    public render() {
        let claz = 'img-container';
        if(this.props.active) {
            claz += ' active';
        }
        return (
            <div className={claz} onClick={this.changePicture}>
                <img src={this.props.children} alt="thumbnail"/>
            </div>
        );
    }
}