import React from 'react';
import AppButton from './../app-button';
import AppActions from '../../actions/app-actions';

export default (props) => {
    let currentListActions = AppActions.currentList;
    return (
        <tr>
            <td>
                <AppButton
                    text="x"
                    handler={props.removeHandler.bind(null, props.item)} />
            </td>
            <td>
                {props.item.name}
            </td>
            <td>
                {props.item.qty}
            </td>
            <td>
                <div className="btn-group">
                    <AppButton
                        text="-"
                        handler={props.decreaseHandler} />
                    <AppButton
                        text="+"
                        handler={props.increaseHandler} />
                </div>
            </td>
            <td>
                {props.subtotal} &euro;
            </td>
        </tr>
    );
}
