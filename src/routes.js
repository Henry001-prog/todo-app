import React from 'react';

import Menu from '../src/components/menu';
import Main from '../src/main';
import Todo from '../src/components/todo';
import About from '../src/components/about';

import history from './History';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

export default function App() {
    return (
        <Router history={history}>
            <div className='container'>

                <Menu />

                <Switch>
                    <Route exact path='/todos'>
                        <Main />
                    </Route>

                    <Route path='/todos'>
                        <Todo />
                    </Route>

                    <Route path='/about'>
                        <About />
                    </Route>

                    <Redirect from='*' to='/todos' />
                </Switch>
            </div>
        </Router>
    );
}

