import React from 'react';

export default (props) => {
    var classes, type;
    if (!props.classes) {
        classes = "btn btn-default btn-sm"
    } else {
        classes = props.classes;
    }
    if (!props.type) {
        type = "button"
    } else {
        type = props.type;
    }
    return <button
            type={type}
            className={classes}
            onClick={props.handler}>
        {props.text}
    </button>;
}