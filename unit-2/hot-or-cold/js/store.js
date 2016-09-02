var createStore = require('redux').createStore;
var reducer = require('./reducer');

var store = createStore(reducer);

module.exports = store;
