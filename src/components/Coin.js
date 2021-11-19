import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        return(
            <img 
            className={`Coin ${this.props.isFlipping && 'flipping'}`} 
            src={ this.props.info.imgSrc }
            alt={ this.props.info.side } />
        );
    }
}

export default Coin;