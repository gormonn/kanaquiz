import React from 'react';
import { render } from 'react-dom';
import Bootstrap from './assets/stylesheets/bootstrap.min.css';
import App from './components/App/App';

let element = React.createElement(App, {});
render(element, document.querySelector('.app'));
