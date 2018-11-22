import * as React from 'react';

interface IProp {
    addToCart: (id: number) => void;
    children: number;
}

export default class AddToCartButton extends React.Component<IProp, {}>{
    public addToCart = () => {
        console.log(this.props.children);
        this.props.addToCart(this.props.children);
    };

    public render() {
        return (
            <button
                className='btn btn-success mt-2'
                onClick={this.addToCart}
            >Add to cart</button>
        );
    }
}