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
                    handler={currentListActions.removeItem.bind(null, props.item)} />
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
                        handler={currentListActions.decreaseItem.bind(null, props.item)} />
                    <AppButton
                        text="+"
                        handler={currentListActions.increaseItem.bind(null, props.item)} />
                </div>
            </td>
            <td>
                {props.subtotal}
            </td>
        </tr>
    );
}
