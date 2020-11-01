import React, { Component } from 'react';
import ChildOne from './child-one';
import ChildTwo from './child-two';

export default class LiftingStateUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Tran Vu'
        }
    }

    handleChangeInfo = () =>{
        this.setState({username: "Tran Le Anh Vu"});
    }

    handleResetUsername = (username) =>{
        this.setState({username});
    }

    render() {
        return (
            <div>
                <h3>Lifting State Up</h3>
                <p>Username: {this.state.username}</p>
                <button className="btn btn-info" onClick={this.handleChangeInfo}>Change Info</button>

                <ChildOne 
                    username={this.state.username} 
                    resetUsername={this.handleResetUsername}
                />

                <ChildTwo username={this.state.username}/>
            </div>
        )
    }
}
