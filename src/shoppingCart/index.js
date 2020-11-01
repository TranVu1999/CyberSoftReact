import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from './data.json';

export default class LiftingStateUpCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lstProduct: data,
            detailProduct: data[0],
            lstCart: []
        }
    }

    dandleDetailProduct = (detailProduct) => {
        this.setState({ detailProduct });
    }

    handleAddCart = (product) => {
        let lstCart = [...this.state.lstCart];
        let index = lstCart.findIndex((item) => { return product.maSP === item.maSP });

        if (index === -1) {
            const productNew = {
                maSP: product.maSP,
                tenSP: product.tenSP,
                hinhAnh: product.hinhAnh,
                soLuong: 1,
                donGia: product.giaBan
            }
            lstCart.push(productNew);
        } else {
            lstCart[index].soLuong++;
        }


        this.setState({ lstCart });
    }

    handleUpdateCart = (productId, operator, isDelete = false) => {
        let lstCart = [...this.state.lstCart];
        let index = lstCart.findIndex((item) => { return productId === item.maSP });

        if (index !== -1) {
            if (isDelete) {
                lstCart.splice(index, 1);
            } else {
                if (operator === '+') {
                    lstCart[index].soLuong++;
                } else if (lstCart[index].soLuong > 1) {
                    lstCart[index].soLuong--;
                } else {
                    lstCart.splice(index, 1);
                }
            }
        }

        this.setState({ lstCart });
    }

    render() {
        const { lstProduct, detailProduct, lstCart } = this.state;
        let amountCart = 0;
        lstCart.forEach((item) => amountCart += item.soLuong);

        return (
            <div>
                <h3 className="title">Bài tập giỏ hàng</h3>
                <div className="container">
                    <button
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target="#modelId"
                    >
                        Giỏ hàng ({amountCart})
                    </button>
                </div>

                <DanhSachSanPham
                    lstProduct={lstProduct}
                    getDetailProduct={this.dandleDetailProduct}
                    addCart={this.handleAddCart}
                />

                <Modal
                    lstCart={lstCart}
                    updateCart={this.handleUpdateCart}
                />

                <div className="row">
                    <div className="col-sm-5">
                        <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
                    </div>
                    <div className="col-sm-7">
                        <h3>Thông số kỹ thuật</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{detailProduct.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{detailProduct.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{detailProduct.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{detailProduct.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{detailProduct.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{detailProduct.rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
