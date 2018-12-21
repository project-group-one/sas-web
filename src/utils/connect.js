import React from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';

const storeNames = ['globalStore'];

const connect = (mapStateToProps, mapDispatchToProps, Component) => {
  const Container = props => {
    const states = {};
    const stores = {};
    storeNames.forEach(name => {
      states[name] = toJS(props[name]);
      stores[name] = props[name];
    });
    const nextStates = mapStateToProps(states);
    const dispatches = mapDispatchToProps(stores);
    const newProps = {};
    Object.keys(props).forEach(propName => {
      if (!storeNames.includes(propName)) {
        newProps[propName] = props[propName];
      }
    });
    return <Component {...newProps} {...nextStates} {...dispatches} />;
  };
  return inject(...storeNames)(observer(Container));
};

export default connect;
