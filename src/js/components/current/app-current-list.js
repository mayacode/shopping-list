import React from 'react';
import AppStore from '../../stores/app-store';
import CurrentListItem from './app-current-list-item';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import {Link} from 'react-router';
import AddNewProduct from '../newItem/addNewItem';

const currentListItems = () => {
    return {items: AppStore.getCurrentList()};
};

const CurrentList = (props) => {
    var total = 0;
    var $items = props.items.map((item, i) => {
        let subtotal = item.price * item.qty;
        total += subtotal;
        return (
            <CurrentListItem
                subtotal={subtotal.toFixed(2)}
                key={item.id}
                item={item} />
        );
    });
    return (
        <div>
            <h1>Current list</h1>
            <AddNewProduct key={props.items.length} max={props.items.length} />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Qty</th>
                        <th></th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {$items}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className="text-right">Total</td>
                        <td>{total.toFixed(2)} &euro;</td>
                    </tr>
                </tfoot>
            </table>
            <Link to="/" className="btn btn-default">Back to List</Link>
        </div>
    );
};

export default StoreWatchMixin(CurrentList, currentListItems);
