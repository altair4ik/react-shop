import * as React from 'react';
import { connect } from 'react-redux';
import ContentItem from '../content-item';
import SearchPanel from '../search-panel';
import Cart from '../cart';

import './content.css'
import DbService from "../../services/db-service";

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

interface IState {
    items: [{ id: number, title: string, pictures: string[], price: number }] | null,
    slides: [{id: number, path: string}] | null,
    search: string,
    cart: any,
}

interface IProp {
    dispatch: (obj: {type: string, item: any}) => {},
    cart: any
}

const mapStateToProps = (state: any) => {
    return {
        cart: state
    }
};

class Content extends React.Component<IProp, IState> {

    private dbService = new DbService();

    constructor(prop: IProp) {
        super(prop);
        this.state = {search: '', items: null, slides: null, cart: null};
    }

    public addToCart = (id: number) => {
        this.dbService.getItem(id).then((item: { id: number, title: string, pictures: string[], price: number }) => {
            this.props.dispatch({type: 'ADD', item});
            this.setState({cart: this.props.dispatch({type: 'GET', item})})
        });
    };

    public componentDidMount() {
        console.log('****', this.props.cart);
        this.dbService.getAllItems().then((items) => {
            this.setState({items});
        });
        this.dbService.getAllSlides().then((slides) => {
            this.setState({slides});
        });
    }

    public searchItems(items: [{ id: number, title: string, pictures: string[], price: number }] | null, search: string) {
        if(items === null) {
            return;
        }
        if (search.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
    }

    public onSearchChange = async (search: string) => {
        await this.setState({search});
        console.log('search', search);
        console.log('search state', this.state.search);
    };

    public render() {
        if (this.state === null) {
            return <div>Loading...</div>
        }
        const visibleItems = this.searchItems(this.state.items, this.state.search);
        if(!visibleItems) {
            return <div>Loading...</div>;
        }
        const items = visibleItems.map((item) => {
            return (
                <div key={item.id} className='col-sm-6 col-md-4 col-lg-4 col-xl-3'>
                    <ContentItem addToCart={this.addToCart} children={item}/>
                </div>
            );
        });
        let slides = [(<img key={1} src='https://i1.rozetka.ua/big_promo/920/920008.jpg' />)];
        if (this.state.slides) {
             slides = this.state.slides.map((slide) => {
                return (<img key={slide.id} src={slide.path} />)
            });
        }

        return (
            <div className="row mt-3">
                <div className="col-xl-2">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                </div>
                <div className='col-xl-8'>
                    <div>
                        <Carousel arrows={true} infinite={true} autoPlay={5000} slides={slides}/>
                    </div>
                    <div className='row'>
                        {items}
                    </div>
                </div>
                <div className="col-xl-2">
                    <Cart />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Content)