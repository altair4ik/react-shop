import * as React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import Content from '../content';
import Item from '../item';
import Header from '../header';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css'

interface IState {
    items: [{ id: number, title: string, pictures: string[], price: number }],
    cart: Array<{ id: number, title: string, pictures: string[], price: number }> | []
}

export default class App extends React.Component<{}, IState> {

    public store = createStore(this.cart);

    public cart(
        state: {id: {id: number, title: string, pictures: string[], price: number, amount: number}} | {} = {},
        action: {
            type: string,
            item: {
                id: number,
                title: string,
                pictures: string[],
                price: number
            }}) {
        switch ((action.type)) {
            case 'ADD':
                if (state[action.item.id]) {
                    state[action.item.id].amount++
                } else {
                    state[action.item.id] = action.item;
                    state[action.item.id].amount = 1;
                }
                return state;
                break;
            case 'DEL':
                console.log('del');
                return state;
                break;
            case 'GET':
                console.log('get', state);
                return state;
            default:
                console.log('default');
                return state;
        }
    }

    public render() {
        this.store.subscribe(() => console.log(this.store.getState()));
        return (
            <Provider store={this.store}>
                <div>
                    <Router>
                        <div>
                            <Header />

                            <div className='container-fluid'>
                                <Route path='/' component={Content} exact={true}/>
                                <Route path='/:id' component={Item} exact={true}/>
                            </div>
                        </div>
                    </Router>
                </div>
            </Provider>
        )
    }

};