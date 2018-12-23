/**
 * 获取mobx Store中的状态和action方法
 * 简单模仿redux中的connect
 * 注意: 该container组件会过滤掉任意store同名属性, 即使该属性的值不是store
 */
import React from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';

const context = require.context('~/store/', false, /\.js$/);
const keys = context.keys().filter(path => path !== './index.js');
const storeNames = keys.map(path => path.match(/\.\/(\w+)\.js/)[1] + 'Store');

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
