import React, { Component } from 'react';

class Index extends Component {
    username = "Tran Le Anh Vu";
    lop = '52e';

    renderInfo = () =>{
        return <p>Name: {this.username} - Lop: {this.lop}</p>;
    }

    render() {
        return (
            <div>
                <h3>Rendering Element</h3>
                {this.renderInfo()}
                {this.renderInfo()}
            </div>
        );
    }
}

export default Index;