import React from 'react';
import AppStore from '../stores/app-store';

export default (InnerComponent, stateCallback) => class extends React.Component {
    constructor(props){
        super(props);
        this.state = stateCallback(props);
        this._onChange = this._onChange.bind(this);
        AppStore.addChangeListener(this._onChange);
        console.log('StoreWatchMixin', props);
    }
    ComponentWillUnmount(){
        AppStore.removeChangeListener(this._onChange);
    }
    _onChange(){
        this.setState(stateCallback(this.props));
        console.log('StoreWatchMixin _onChange', this.state);
    }
    render(){
        return <InnerComponent {...this.state} {...this.props} />;
    }
}
