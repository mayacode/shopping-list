import React from "react";
import AppActions from '../actions/app-actions';
import GlobalList from './app-global-list';
import CurrentList from './app-current-list';

export default class App extends React.Component{
    render(){
        return <div className="container">
            <GlobalList />
            <CurrentList />
        </div>;
    }
};
