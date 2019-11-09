import React, { Fragment } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import { Provider } from 'mobx-react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { stores } from './store';
import Home from './page/home';
import Inside from './page/inside'
import Login from '~/components/Authority/login'
import NavLayout from './layouts/NavLayout';

import MainLayout from './components/MainLayout';

function RouterConfig() {
    return (
        <LocaleProvider locale={zhCN}>
            <Provider {...stores}>
                <HashRouter>
                    <Fragment>
                        <Switch>
                            <Route path='/' exact={true} component={MainLayout} />
                            <Route path='/inside' component={Inside} />
                        </Switch>
                        <Switch>
                            <Route exact={true} path='/' component={Home} />
                            <Route path='/news' component={NavLayout} />
                            <Route path='/user' component={NavLayout} />
                            <Route path='/report' component={NavLayout} />
                        </Switch>
                        <Login />
                    </Fragment>
                </HashRouter>
            </Provider>
        </LocaleProvider>
    );
}

export default RouterConfig;
