import React from 'react';
import CurrentListItem from './app-current-list-item';
import {Link} from 'react-router';
import AddNewProduct from '../newItem/addNewItem';
import AppStore from '../../stores/app-store';

export default class CurrentList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           current: []
        };
        this._removeItem = this._removeItem.bind(this);
        this._decreaseItem = this._decreaseItem.bind(this);
        this._increaseItem = this._increaseItem.bind(this);
    }
    componentDidMount(){
        this.init();
    }
    componentWillReceiveProps(nextProps){
        AppStore.removeRefBinding(this.refCurrent);
        this.init();
    }
    componentWillUnmount(){
        AppStore.removeRefBinding(this.refCurrent);
    }
    init(){
        this.refCurrent = AppStore.getRef('currentList', 'current', this);
    }
    _removeItem(item){
        this.state.current.splice(this.state.current.findIndex( i => i === item), 1);
        this.setState({
            current: this.state.current
        });
    }
    _decreaseItem(itemIndex){
        this.state.current[itemIndex].qty--;
        if (this.state.current[itemIndex].qty === 0) {
            this._removeItem(this.state.current[itemIndex]);
        } else {
            this.setState({
                current: this.state.current
            });
        }
    }
    _increaseItem(itemIndex){
        this.state.current[itemIndex].qty++;
        this.setState({
            current: this.state.current
        });
    }
    render(){
        var total = 0,
            $items = this.state.current.map((item, index) => {
                let subtotal = item.price * item.qty;
                total += subtotal;
                return (
                    <CurrentListItem
                        subtotal={subtotal.toFixed(2)}
                        key={item.id}
                        removeHandler={this._removeItem}
                        increaseHandler={this._increaseItem.bind(null, index)}
                        decreaseHandler={this._decreaseItem.bind(null, index)}
                        item={item}
                        index={index}/>
                );
            });
        return (
            <div>
                <h1>Current list</h1>
                <AddNewProduct key={0} max={0} />
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
    }
}
