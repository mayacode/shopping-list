import React from 'react';
import Summary from './app-summary';

export default () => {
    return (
        <div className="row">
            <div className="col-sm-6">
                <h1>Shopping List</h1>
            </div>
            <div className="col-sm-6 text-right">
                <Summary />
            </div>
        </div>
    );
}