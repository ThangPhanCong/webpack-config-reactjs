// import FmsButton from './FmsButton/FmsButton.jsx';
// require("./FmsButton/"  + name + ".jsx");
// require("./FmsButton/" + name + ".jsx");
import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App-test.js'
function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('././', true, /\.jsx$/));
importAll(require.context('././', true, /\.js$/));
importAll(require.context('././', true, /\.scss$/));
// require.context("./FmsButton/", false, /\.test\.jsx$/);
// import Example from './FmsDropdown/FmsDropdown.jsx';
import 'bootstrap/dist/css/bootstrap.css';
// require('./FmsButton/FmsButton.scss');
ReactDOM.render(<App />, document.getElementById('root'));
