import React from "react";
import {Router, Route, IndexRoute} from 'react-router';
import GlobalList from './global/app-global-list';
import CurrentList from './current/app-current-list';
import ItemDetail from './product/app-item-detail';
import Template from './app-template';

export default () => {
    return (
        <Router>
            <Route path="/" component={Template}>
                <IndexRoute component={GlobalList} />
                <Route path="current" component={CurrentList} />
                <Route path="item/:item" component={ItemDetail} />
            </Route>
        </Router>
    );
};
