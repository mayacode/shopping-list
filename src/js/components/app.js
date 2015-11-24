import React from "react";
import GlobalList from './global/app-global-list';
import CurrentList from './current/app-current-list';

export default class App extends React.Component{
    render(){
        return <div className="container">
            <GlobalList />
            <CurrentList />
        </div>;
    }
};
