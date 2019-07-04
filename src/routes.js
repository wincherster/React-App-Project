import React from 'react';
// import { Router, Route, Link } from 'react-router'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'

import App from './App';
import Index from './pages/index';
import InfoList from './pages/infoList';
import InfoDetail from './pages/infoDetail';
import OrderList from './pages/orderList';
import My from './pages/my';

const routes = (
    <Router >
        <Route path="/" component={App}>
            
            <Route path="/index" component={Index} />
            <Route path="/infoList" component={InfoList} />
            <Route path="/infoDetail/:id" component={InfoDetail} />
            <Route path="/orderList" component={OrderList} />
            <Route path="/my" component={My} />

            {/* <Redirect  to="/index" /> */}
        </Route>
    </Router>
);

export default routes;