import * as React from 'react';
import DbService from "../../services/db-service";
import ItemTitle from "../item-title";
import ItemCharacteristic from "../item-characteristic";
import AddToCartButton from "../add-to-cart-button";
import ItemThumb from "../item-thumb";
import ItemPicture from "../item-picture";
import Cart from "../cart";
import { connect } from 'react-redux';


import './item.css';
import ItemDescription from "../item-description/item-description";

interface IState {
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
            ]
    },
    itemPicture: string,
    indicator: number,
    cart: any
}

interface IProp {
    match: {
        params: {
            id: string
        }
    },
    dispatch: (obj: {type: string, item?: any, id?: number}) => {},
    cart: any
}

const mapStateToProps = (state: any) => {
    return {
        item: state.item
    }
};

class Item extends React.Component<IProp, IState> {
    private dbService = new DbService();

    public componentDidMount() {
        const id = +this.props.match.params.id;
        this.dbService.getItem(id).then((item) => {
            this.setState({item});
            this.setState({itemPicture: item.pictures[0]});
            this.setState({indicator: 0});
        });
    }

    public componentWillReceiveProps(nextProps: any) {
        const id = +nextProps.match.params.id;
        this.dbService.getItem(id).then((item) => {
            this.setState({item});
            this.setState({itemPicture: item.pictures[0]});
            this.setState({indicator: 0});
        });
    }

    public addToCart = (id: number) => {
        this.dbService.getItem(id).then((item: { id: number, title: string, pictures: string[], price: number }) => {
            this.props.dispatch({type: 'ADD', item});
            this.setState({cart: this.props.dispatch({type: 'GET', item})})
        });
    };

    public delItem = (itemId: number) => {
            this.setState({cart: this.props.dispatch({type: 'DEL', id: itemId})})
    };

    public clearCart = () => {
        this.setState({cart: this.props.dispatch({type: 'CLEAR'})})
    };

    public changePictrure = (path: string, idx: number): void => {
        this.setState({itemPicture: path});
        this.setState({indicator: idx})
    };

    public render() {
        if (this.state === null) {
            return <div>Loading...</div>
        }
        const { title, pictures, price, characteristics, description} = this.state.item;
        const characteristicsList = characteristics.map((el) => {
            return <ItemCharacteristic key={el.title} children={el}/>
        });
        const thumbs = pictures.map((el, index) => {
            if (this.state.indicator === index) {
                return <ItemThumb changePicture={this.changePictrure} idx={index} active={true} key={el} children={el}/>
            }
            return <ItemThumb changePicture={this.changePictrure} idx={index} active={false} key={el} children={el}/>
        });
        return (
            <div className='row mt-3'>
                <div className="col-xl-2"/>
                <div className="col-xl-8">
                    <ItemTitle children={title}/>
                    <div className='row'>
                        <div className='col-md-6 mt-3'>
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="gal">
                                        {thumbs}
                                    </div>
                                </div>
                                <ItemPicture children={this.state.itemPicture}/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <h4 className='font-weight-bold'>Characteristics</h4>
                                {characteristicsList}
                            </div>
                            <div className='mt-3 mb-3'>
                                <h4 className='font-weight-bold'>Description</h4>
                                <ItemDescription children={description}/>
                                <span className='font-weight-bold'>Цена: {price}грн</span>
                            </div>
                            <AddToCartButton addToCart={this.addToCart} children={this.state.item.id} />
                        </div>
                    </div>
                </div>
                <div className="col-xl-2">
                    <Cart clearCart={this.clearCart} delItem={this.delItem} state={this.state}/>
                </div>

                <hr/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Item)