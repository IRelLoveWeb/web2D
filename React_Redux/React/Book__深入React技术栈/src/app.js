import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'

import store from './configs/store';
import Router from './configs/routes';

import 'normalize.css'
import 'CSS/index.scss'

const renderer = ReactDom.render(
    <Provider store={store}>
        <Router  />
    </Provider>,
    document.getElementById('root')
)

//console.log(renderer)

if (module.hot) {
    module.hot.accept()
}