import * as React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cart-item';

import './cart.css'

const mapStateToProps = (state: any) => {
    return {
        cart: state
    }
};

interface IProp {
    dispatch: (obj: { type: string, item: any }) => {},
    cart: any
}

class Cart extends React.Component<IProp, {}> {

    public render() {
        const uniqueItems = [];
        for (const key in this.props.cart) {
            if (this.props.cart.hasOwnProperty(key)) {
                uniqueItems.push(this.props.cart[key])
            }
        }

        const items = uniqueItems.map((el: {
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
        }) => {
            return <CartItem key={el.id} item={el} />
        });
        return (
            <div className="cart text-center p-3">
                <h5>Cart</h5>
                {items}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Cart)