import React from 'react';

export default class Div extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = this.props;
        return (
            <div className={props.className}></div>
        );
    }
}