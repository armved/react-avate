const componentGenerator = require('./component');
const reducerGenerator = require('./reducer');

module.exports = function(plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('reducer', reducerGenerator);
};
