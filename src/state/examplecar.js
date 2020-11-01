import React, { Component } from 'react';

class ShowCar extends Component {
    constructor(props){
        super(props);
        this.state = {
            listImg: ['./img/imgRedCar.jpg', './img/imgSilverCar.jpg', './img/imgBlackCar.jpg'],
            currentIndex: 0
        }
    }

    handleShowCar = (currentIndex) =>{
        this.setState({currentIndex});
    }

    render() {
        const currentImg = this.state.listImg[this.state.currentIndex];
        return (
            <div className="container">
                <h3>Show Car</h3>
                <div className="row">
                    <div className="col-6">
                        <img src={currentImg} alt="alo" className="img-fluid"/>
                    </div>
                    <div className="col-6">
                        <button 
                            className="btn btn-danger mr-3"
                            onClick = {() => {this.handleShowCar(0)}}
                        >Red Color</button>
                        <button 
                            className="btn btn-secondary mr-3"
                            onClick = {() => {this.handleShowCar(1)}}
                        >Black Color</button>
                        <button 
                            className="btn btn-dark"
                            onClick = {() => {this.handleShowCar(2)}}
                        >Silver Color</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowCar;