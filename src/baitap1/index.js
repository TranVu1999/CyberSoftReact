import './index.css';

import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Sidebar from './sidebar';

class Baitap1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="body">
                    <Content />
                    <Sidebar />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Baitap1;