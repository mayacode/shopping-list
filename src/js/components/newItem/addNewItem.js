import React from 'react';
import AppActions from '../../actions/app-actions';
import AppButton from '../app-button';

export default class AddNewItem extends React.Component {
    constructor(props){
        super(props);
        this._onNameChange = this._onNameChange.bind(this);
        this._onPriceChange = this._onPriceChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
        this.currentListActions = AppActions.currentList;
        this.newProduct = {id: props.max, qty: 1};
    }
    _onNameChange(e){
        this.newProduct.name = e.target.value;
    }
    _onPriceChange(e){
        this.newProduct.price = e.target.value;
    }
    _onSubmit(e){
        e.preventDefault();
        this.currentListActions.addNewItem(this.newProduct);
        this.newProduct = {id: this.newProduct.id++, qty: 1};
        e.target.reset();
    }
    render(){
        return <form onSubmit={this._onSubmit}>
            <fieldset>
                <label>
                    Name of new product:
                    <input name="productName" type="text" required title="Please, write the full name of product." onChange={this._onNameChange} />
                </label>
                <label>
                    Price of new product
                    <input name="productPrice" type="number" step="any" min="0.01" required title="Please, provide the price, it is needed for calculation" onChange={this._onPriceChange} />
                </label>
            </fieldset>
            <AppButton
                type="submit"
                className="btn btn-primary"
                text="Add" />
        </form>;
    }
}
