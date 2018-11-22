import * as React from 'react';

interface IProp {
    children: number;
}

export default class AddToCartButton extends React.Component<IProp, {}>{
    public addToCart = () => {
        console.log(this.props.children);
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