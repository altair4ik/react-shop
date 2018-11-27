import * as React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cart-item';
import ClearCartButton from '../clear-cart-button';

import './cart.css'

const mapStateToProps = (state: any) => {
    return {
        cart: state
    }
};

interface IProp {
    dispatch: (obj: { type: string, item: any }) => {};
    cart: any;
    state: any;
    delItem: (id: number) => void;
    clearCart: () => void;
}

class Cart extends React.Component<IProp, {}> {

    public render() {
        const uniqueItems = [];
        for (const key in this.props.cart) {
            if (this.props.cart.hasOwnProperty(key)) {
                uniqueItems.push(this.props.cart[key])
            }
        }

        if(uniqueItems.length === 0) {
            return (
                <div className="cart text-center p-3">
                    <h5>Cart</h5>
                    <span>Корзина пуста.</span>
                </div>
            );
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
            return <CartItem key={el.id} item={el} delItem={this.props.delItem}/>
        });
        return (
            <div className="cart text-center p-3">
                <h5>Cart</h5>
                {items}
                <ClearCartButton clearCart={this.props.clearCart} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Cart)