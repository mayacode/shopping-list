import React from "react";
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import AppActions from '../../actions/app-actions';
import AppButton from '../app-button';
import {Link} from 'react-router';

function getGlobalListItem(props) {
    let item = AppStore.getGlobalList().find(({id}) => id.toString() === props.params.item);
    return {item: item};
}

const ItemDetail = (props) => {
    console.log('ItemDetail',props);
    let currentListActions = AppActions.currentList;
    return (
        <div>
            <h4>{props.item.name}</h4>
            <p className="col-xs-2">{props.item.price} &euro;</p>
            <p className="col-xs-2 text-success">
                {props.item.qty && `(${props.item.qty} added)`}
            </p>
            <div className="btn-group">
                <Link to="/" className="btn btn-default btn-sm">Back to List</Link>
                <AppButton
                    className="col-xs-2"
                    handler={currentListActions.addItem.bind(null, props.item)}
                    text="Add" />
            </div>
        </div>
    );
};

export default StoreWatchMixin(ItemDetail, getGlobalListItem);
