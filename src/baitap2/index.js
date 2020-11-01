import React from 'react';
import Header from './header';
import Footer from './footer';
import Carousel from './carousel';
import Contact from './contact';
import Listcart from './listcart';
import WhatWeDo from './whatwedo';

export default function Baitap2() {
    return (
        <div>
            <Header />
            <Carousel />
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <WhatWeDo />
                    </div>
                    <div className="col-sm-4">
                        <Contact />
                    </div>
                </div>
                <Listcart />
            </div>
            
            <Footer />
        </div>
    );
}