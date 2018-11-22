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

    public cart(state: any[] = [], action: {type: string, item: any}) {
        switch ((action.type)) {
            case 'ADD':
                state.push(action.item);
                return state;
                break;
            case 'DEL':
                state.push('del');
                return state;
                break;
            default:
                console.log('default');
                return state;
        }
    }

    public render() {
        const store = createStore(this.cart);
        store.subscribe(() => console.log(store.getState()));
        return (
            <Provider store={store}>
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