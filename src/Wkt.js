import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'

export default class Wkt extends Component {
    static propsTypes = {
        style: PropTypes.object,
        data: PropTypes.object
    };
    render() {
        return <noscript></noscript>;
    }
}