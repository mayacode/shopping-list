import React from 'react';
import AppStore from '../../stores/app-store';
import GlobalListItem from './app-global-list-item';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';

function getGlobalList() {
    return {items: AppStore.getGlobalList()};
}

const GlobalList = (props) => {
    let $items = props.items.map(item => {
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
};

export default StoreWatchMixin(GlobalList, getGlobalList);
