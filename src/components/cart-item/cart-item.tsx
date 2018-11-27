import * as React from 'react';
import DelItemButton from '../del-item-button';

import './cart-item.css'
import {Link} from "react-router-dom";

interface IProp {
    item: {
        id: number,
        title: string,
        pictures: string[],
        price: number,
        description: string,
        characteristics: [
            {
                title: string,
                value: string
            }
            ],
        amount: number
    };
    delItem: (id: number) => void;
}

export default class CartItem extends React.Component<IProp, {}>{
    public render() {
        if (this.props.item === undefined) {
            return (<span>Корзина пуста</span>)
        }
        const {id, pictures, title, amount} = this.props.item;
        const t = title.split('(')[0];
        return(
            <div className='item'>
                <div className='item-pic'><span className='thumb'><img src={pictures[0]} /></span></div>
                <span><Link to={id.toString()}>{t}</Link> {amount}шт. <DelItemButton delItem={this.props.delItem} id={id}/></span>
            </div>
        );
    }
}