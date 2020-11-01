import React, { Component } from "react";

export default class SanPham extends Component {
    render() {
        const {prod} = this.props;

        return (
            <div className="col-sm-4">
                <div className="card">
                    <img className="card-img-top" src={prod.hinhAnh} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{prod.tenSP}</h4>
                        <button 
                            className="btn btn-success"
                            onClick={() =>{this.props.getDetailProduct(prod)}}
                        >Chi tiết</button>
                        <button 
                            className="btn btn-danger"
                            onClick={() =>{this.props.addCart(prod)}}
                        >Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        );
    }
}
