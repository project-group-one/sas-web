import React, { Fragment } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { stores } from './store';
import Home from './page/home';
import News from './page/news';
import Login from '~/components/Authority/login'

import MainLayout from './components/MainLayout';

function RouterConfig() {
    return (
        <Provider {...stores}>
            <HashRouter>
                <Fragment>
                    <Switch>
                        <Route path='/' component={MainLayout} />
                    </Switch>
                    <Switch>
                        <Route exact={true} path='/' component={Home} />
                        <Route path='/news' component={News} />
                    </Switch>
                    <Login />
                </Fragment>
            </HashRouter>
        </Provider>
    );
}

export default RouterConfig;
