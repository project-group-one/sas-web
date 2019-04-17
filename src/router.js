import React, { Fragment } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { stores } from './store';
import Home from './page/home';
import News from './page/news';

import MainLayout from './containers/MainLayout';

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
                </Fragment>
            </HashRouter>
        </Provider>
    );
}

export default RouterConfig;
