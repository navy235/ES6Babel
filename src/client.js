import 'babel-polyfill';
import React from 'react';
import ReactDOM from'react-dom';
import {Router} from 'react-router';
import FluxibleComponent from'fluxible-addons-react/FluxibleComponent';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import createRoutes from './routes'
import app from './app'
import fetchData from './utils/fetchData';
let history = createBrowserHistory();
window.React = React;
let dehydratedState = window.__DATA__;
let firstRender = true;

app.rehydrate(dehydratedState, (err, context)=> {
    if (err) {
        throw err;
    }
    window.context = context;
    let routes = createRoutes(context);
    ReactDOM.render(
        React.createElement(
            FluxibleComponent,
            {context: context.getComponentContext()},
            React.createElement(Router, {
                history: history,
                children: routes,
                onUpdate: UpdateRoute
            })
        ),
        document.getElementById('main')
    );
    function UpdateRoute() {
        if (!firstRender) {
            fetchData(context, this.state);
        }
        firstRender = false;
    }
});
