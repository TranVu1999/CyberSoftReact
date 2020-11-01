import React, { Component } from 'react'

export default class ChildTwo extends Component {
    render() {
        return (
            <div>
                <h3>Child Two</h3>
                <p>Username: {this.props.username}</p>
            </div>
        )
    }
}
