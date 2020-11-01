import React, { Component } from 'react';
import data from './data.json';

export default class ExampleMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lstMovie: data
        }
    }

    renderData = () => {
        const { lstMovie } = this.state;
        return lstMovie.map((item) => {
            return (
                <div key={item.id} className="col-4">
                    <div class="card">
                        <div class="card-body">
                            <img src={item.hinhAnh} alt="" className="w-100" />
                        </div>
                        <div class="card-footer">
                            <h2>{item.tenPhim}</h2>
                            <p className="ellipsis">{item.moTa}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>ExampleMovie List Key</h3>
                <div className="container">
                    <div className="row">
                        {this.renderData()}
                    </div>
                </div>
            </div>
        )
    }
}
