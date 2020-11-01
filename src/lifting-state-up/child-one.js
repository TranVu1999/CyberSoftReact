import React, { Component } from 'react'

export default class ChildOne extends Component {

    handleResetUsername = () =>{
        // Vì props này được truyền vào cái hàm
        this.props.resetUsername('Tran Vu');
    }

    render() {
        return (
            <div>
                <h3>Child One</h3>
                <p>Username: {this.props.username}</p>
                <button className="btn btn-danger" onClick={this.handleResetUsername}>Reset Username</button>
            </div>
        )
    }
}
