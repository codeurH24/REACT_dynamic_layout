var React = require('react');
var ReactDOM = require('react-dom');
var Content = require('./Content');
var { BrowserRouter } = require('react-router-dom');



module.exports = function(data, containerId) {
  var container = document.getElementById(containerId || 'content');
  ReactDOM.render(
    <BrowserRouter>
      <Content {...data} />
    </BrowserRouter>
  , container);
};
