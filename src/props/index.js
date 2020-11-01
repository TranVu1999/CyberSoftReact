import React, { Component } from 'react';
import ClassProps from './classProps';
import FuncProps from './funcProps';
import ChildrenProps from './childrenProps';

export default class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Tran Vu',
            lop: "FE52E"
        }
    }

    handleChangeInfo = () =>{
        this.setState({
            username: "Tran Le Anh Vu",
            lop: "A13"
        });
    }

    render() {
        return (
            <div>
                <h3>Props</h3>
                <p>Username: {this.state.username} - Lop: {this.state.lop}</p>
                <button 
                    className="btn btn-primary"
                    onClick={this.handleChangeInfo}
                >Change Info</button>

                <ClassProps username={this.state.username} lop={this.state.lop}/>

                <FuncProps username={this.state.username} lop={this.state.lop}/>

                <ChildrenProps>
                    <h5>Demo Children Props</h5>
                    <p>Username: {this.state.username} - Lop: {this.state.lop}</p>
                </ChildrenProps>
            </div>
        )
    }
}
