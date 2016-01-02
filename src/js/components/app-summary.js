import React from 'react';
import {Link} from 'react-router';
import AppStore from '../stores/app-store';

export default class Summary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: []
        };
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
        this.refCurrent = AppStore.DBbindToState('currentList', 'current', this);
    }
    render(){
        var totals = {total: 0, amount: this.state.current.length};
        this.state.current.forEach((el) => {
            totals.total += el.qty * el.price;
        });
        return (
            <div style={{paddingTop: 15}}>
                <Link to="/current" className="btn btn-success">
                    {`Current list items: ${totals.amount} / ${totals.total.toFixed(2)}`}
                </Link>
            </div>
        );
    }
}
