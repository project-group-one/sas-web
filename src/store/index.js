const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(path => path !== './index.js');

export const Stores = {};
export const stores = {};

keys.forEach(path => {
  const Store = context(path).default;
  const name = path.match(/\.\/(\w+)\.js/)[1];

  Stores[`${name}Store`] = Store;
  stores[`${name}Store`] = new Store();
});

export function getStore() {
  let args = Array.from(arguments)
  if (args.length > 1) {
      return args.map(name => stores[name])
  }
  return stores[args[0]]
}
