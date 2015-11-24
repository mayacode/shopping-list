import React from 'react';
import {Link} from 'react-router';
import AppStore from '../stores/app-store';
import StoreWatchMixin from '../mixins/StoreWatchMixin';

const Summary = (props) => {
    return (
        <div style={{paddingTop: 15}}>
            <Link to="/current" className="btn btn-success">
                {`New list items: ${props.qty} / ${props.total}`}
            </Link>
        </div>
    );
};

export default StoreWatchMixin(Summary, AppStore.getListTotals);
