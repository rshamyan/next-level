import Main from './blocks/l-main/l-main.js';
import React from 'react';
import ReactDOM from 'react-dom';
import NormalizeCss from 'normalize.css/normalize.css';

(function() {
  ReactDOM.render(<Main/>, document.getElementById('app'));
  let styles = NormalizeCss;
})();
