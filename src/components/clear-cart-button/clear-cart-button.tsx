import * as React from 'react';

import './clear-cart-button.css';

interface IProp {
    clearCart: () => void;
}


export default class ClearCartButton extends React.Component<IProp, {}> {
    public clearCart = () => {
        this.props.clearCart()
    };

    public render() {
        return (
            <button onClick={this.clearCart} className='btn btn-outline-danger btn-sm mt-3'>Clear Cart</button>
        );
    }
}