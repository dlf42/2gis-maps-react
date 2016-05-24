import React, { Component, PropTypes } from 'react'

export default class Marker extends Component {
    static propsTypes = {
        pos: PropTypes.array,
        onClick: PropTypes.func,
        onDrag: PropTypes.func,
        label: PropTypes.string,
        staticLabel: PropTypes.string,
        draggable: PropTypes.bool
    };
    static defaultProps = {
        draggable: false
    };
    render() {
        return <noscript></noscript>;
    }
}
