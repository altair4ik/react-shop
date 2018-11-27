import * as React from 'react';

import './del-item-button.css';

interface IProp {
    id: number;
    delItem: (id: number) => void;
}

interface IState {
    id: number
}

export default class DelItemButton extends React.Component<IProp, IState> {
    public delItem = () => {
        console.log('del', this.props.id);
        this.props.delItem(this.props.id)
    };

    public render() {
        return (
            <button className='btn btn-outline-danger btn-sm' onClick={this.delItem}><i className="fa fa-trash-o"/></button>
        );
    }
}