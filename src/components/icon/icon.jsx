import React from 'react';

export default class Icon extends React.Component {
    addClick () {
        alert('')
    }
    render() {
        const baseClassName = `ireact-icon ireact-icon-${this.props.type}`;
        return (<span onClick={this.addClick} className={baseClassName}></span>);
    }
}
