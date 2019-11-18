import React, { Fragment } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import { Provider } from 'mobx-react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { stores } from './store';
import Home from './page/home';
import Inside from './page/inside'
import Login from '~/components/Authority/login'
import Register from '~/components/Authority/register'
import NavLayout from './layouts/NavLayout';

import MainLayout from './components/MainLayout';

function RouterConfig() {
    return (
        <LocaleProvider locale={zhCN}>
            <Provider {...stores}>
                <HashRouter>
                    <Fragment>
                        <Switch>
                            <Route path='/' component={MainLayout} />
                        </Switch>
                        <Switch>
                            <Route exact={true} path='/' component={Home} />
                            <Route path='/news' component={NavLayout} />
                            <Route path='/user' component={NavLayout} />
                            <Route path='/report' component={NavLayout} />
                            <Route path='/inside' exact={true} component={Inside} />
                        </Switch>
                        <Login />
                        <Register />
                    </Fragment>
                </HashRouter>
            </Provider>
        </LocaleProvider>
    );
}

export default RouterConfig;
