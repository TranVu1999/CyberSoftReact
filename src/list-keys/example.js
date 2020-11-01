import React, { Component } from 'react'

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lstSP: [
                { id: 1, tenSP: 'SamSung', gia: 5000 },
                { id: 2, tenSP: 'Oppo F7', gia: 5000 },
                { id: 3, tenSP: 'Iphone 12', gia: 5000 }
            ]
        }
    }

    renderData = () => {
        const { lstSP } = this.state;
        return lstSP.map((item) => {
            return (
                <tr key = {item.id}>
                    <td>{item.id}</td>
                    <td>{item.tenSP}</td>
                    <td>{item.gia}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Example List Key</h3>
                <table style={{ width: '50%' }}>
                    <thead>
                        <tr>
                            <th>Ma SP</th>
                            <th>Ten SP</th>
                            <th>Gia SP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
