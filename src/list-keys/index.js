import React, { Component } from 'react'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lstPeople: [
                { ten: 'Tran Vu', tuoi: 18 },
                { ten: 'Vu Tran', tuoi: 19 },
                { ten: 'Tran Le Anh Vu', tuoi: 20 }
            ]
        }
    }

    renderHTML = () => {
        const { lstPeople } = this.state;
        return lstPeople.map((item, index) => {
            return <li key={index}>Ten: {item.ten} - Tuoi: {item.tuoi}</li>
        })
    }

    render() {
        return (
            <div>
                <h3>List Key</h3>
                <ul>
                    {this.renderHTML()}
                </ul>

            </div>
        )
    }
}
