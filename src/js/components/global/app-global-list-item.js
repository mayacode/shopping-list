import React from 'react';
import AppActions from '../../actions/app-actions';
import AppButton from './../app-button';
import {Link} from 'react-router';

export default (props) => {
    let currentListActions = AppActions.currentList,
        itemStyle = {
            borderBottom: '1px solid #ccc',
            padding: '7px 0'
        };
    return (
        <div className="col-xs-12" style={itemStyle}>
            <div className="col-xs-6" style={{paddingTop: 6}}>
                <div className="col-xs-7">
                    <Link to={ `/item/${props.item.id}` }>{props.item.name}</Link>
                </div>
                <p className="col-xs-3 text-success">
                    {props.item.qty && `(${props.item.qty} added)`}
                </p>
                <p className="col-xs-2">{props.item.price} &euro;</p>
            </div>
            <AppButton
                className="col-xs-2"
                handler={currentListActions.addItem.bind(null, {endpoint: 'currentList', item: props.item})}
                text="Add" />
        </div>
    );
}
