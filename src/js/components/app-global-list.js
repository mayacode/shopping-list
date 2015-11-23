import React from 'react';
import AppStore from '../stores/app-store';
import GlobalListItem from './app-global-list-item';

function getGlobalList() {
    return {items: AppStore.getGlobalList()};
}

class GlobalList extends React.Component{
    constructor(){
        super();
        this.state = getGlobalList();
    }
    render(){
        let $items = this.state.items.map(item => {
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

export default GlobalList;
