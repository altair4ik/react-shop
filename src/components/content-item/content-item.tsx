import * as React from 'react';
import {Link} from 'react-router-dom';
import AddToCartButton from '../add-to-cart-button';

import './content-item.css';

interface IProps {
    addToCart: (id: number) => void,
    children: { id: number, title: string, pictures: string[], price: number }
}

export default class ContentItem extends React.Component<IProps, {}> {
    public render() {
        const {id, title, pictures, price} = this.props.children;
        return (
            <div className="card mt-3">
                <img className='picture' width='140' height='250' src={pictures[0]} alt="Card image cap"/>
                <div className="card-body">
                    <Link to={id.toString()}><h5 className="card-title">{title}</h5></Link>
                    <p className="card-text">price: {Math.floor(price / 27)}$</p>
                    <AddToCartButton addToCart={this.props.addToCart} children={id} />
                </div>
            </div>
        );
    }
}