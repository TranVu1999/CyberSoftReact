import React, { Component } from "react";
import SanPham from './san-pham';

export default class DanhSachSanPham extends Component {

    renderLstProduct = () =>{
        const {lstProduct} = this.props;

        return lstProduct.map((item, index) =>{
            return <SanPham 
                prod={item} 
                key={index}
                getDetailProduct={this.props.getDetailProduct}
                addCart={this.props.addCart}

            />
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderLstProduct()}
                </div>
            </div>
        );
    }
}
