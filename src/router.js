import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { stores } from './store';
import Home from './page/home';

function RouterConfig() {
  return (
    <Provider {...stores}>
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default RouterConfig;
