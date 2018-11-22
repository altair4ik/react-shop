import * as React from 'react';
import Content from '../content';
import Item from '../item';
import Header from '../header';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css'

interface IState {
    items: [{ id: number, title: string, pictures: string[], price: number }]
}

export default class App extends React.Component<{}, IState> {

    public render() {
        return (
            <div>
                <Router>
                    <div>
                        <Header/>

                        <div className='container-fluid'>
                            <Route path='/' component={Content} exact={true}/>
                            <Route path='/:id' component={Item} exact={true}/>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }

};