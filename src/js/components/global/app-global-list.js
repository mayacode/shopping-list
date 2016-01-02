import React from 'react';
import AppStore from '../../stores/app-store';
import GlobalListItem from './app-global-list-item';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';

export default class GlobalList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           global: []
        };
    }
    componentDidMount(){
        this.init();
    }
    componentWillReceiveProps(nextProps){
        AppStore.removeRefBinding(this.refGlobal);
        this.init();
    }
    componentWillUnmount(){
        AppStore.removeRefBinding(this.refGlobal);
    }
    init(){
        this.refGlobal = AppStore.getRef('globalList', 'global', this);
    }
    render(){
        let $items = this.state.global.map(item => {
            return <GlobalListItem
                key={item.id}
                item={item} />;
        });
        return (
            <div className="row">
                <h2>All items</h2>
                {$items}
            </div>
        );
    }
}
