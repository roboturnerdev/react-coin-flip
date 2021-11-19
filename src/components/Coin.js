import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        return(
            <img 
            className={`Coin ${this.props.isFlipping && 'flipping'}`} 
            src={this.props.face}
            alt='Faction Coin' />
        );
    }
}

export default Coin;