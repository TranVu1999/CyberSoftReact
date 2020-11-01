import React from 'react';
import Itemcart from './itemcard';

export default function Listcart() {
    return (
        <div className="row">
            <div className="col-sm-4">
                <Itemcart />
            </div>
            <div className="col-sm-4">
                <Itemcart />
            </div>
            <div className="col-sm-4">
                <Itemcart />
            </div>
        </div>
    );
}