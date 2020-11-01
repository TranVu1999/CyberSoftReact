import React, { Component } from 'react';
import Example from './example';

class Index extends Component {
    handleClick = () =>{
        console.log('click');
    }

    handleClickParam = (a, b) =>{
        console.log(`${a} - ${b}`);
    }

    render() {
        return (
            <div>
                <h3>Handle Event</h3>
                <button 
                    className="btn btn-primary mr-3" 
                    // không có tham số 
                    onClick={this.handleClick}
                >Click</button>

                <button 
                    className="btn btn-primary mr-3" 
                    onClick={() => {this.handleClickParam('Tran Vu', '12')}}
                >Click Param</button>

                <button 
                    className="btn btn-danger" 
                    onClick={() => {console.log('demo click')}}
                >Demo Click</button>

                <div>
                    <Example />
                </div>
            </div>
        );
    }
}

export default Index;