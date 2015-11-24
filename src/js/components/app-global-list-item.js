import React from 'react';
import AppActions from '../actions/app-actions';
import AppButton from './app-button';

export default (props) => {
    let currentListActions = AppActions.currentList;

    return (
        <div className="col-xs-12">
            <h4 className="col-xs-6">{props.item.name}</h4>
            <p className="col-xs-2 text-success">
                {props.item.qty && `(${props.item.qty} added)`}
            </p>
            <p className="col-xs-2">{props.item.price}</p>
            <AppButton
                className="col-xs-2"
                handler={currentListActions.addItem.bind(null, props.item)}
                text="Add" />
        </div>
    );
}
