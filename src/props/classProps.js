import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        return (
            <div>
                <h3>Class Props</h3>
                <p>Username: {this.props.username} - Lop: {this.props.lop}</p>
            </div>
        )
    }
}
