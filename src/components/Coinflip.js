import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from '../helpers';
import './Coinflip.css';

class Coinflip extends Component {

    static defaultProps = {
        coins: [
            {side: 'horde', imgSrc: '/horde.png'},
            {side: 'alliance', imgSrc: '/alliance.png'}
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            nFlips: 0,
            winsHorde: 0,
            winsAlly: 0,
            coinFace: null
        };
        this.handleClick = this.handleClick.bind(this);
    }
    

    toss () {
        const newCoin = choice(this.props.coins);
        this.setState(state => {
            // let newState = {
            //     ...state,           // copy in the old state object, then update new properties
            //     coinFace: newCoin,
            //     nFlips: state.nFlips + 1,
            // }
            // if(newCoin.side === 'horde') {
            //     newState.winsHorde += 1;
            // } else {
            //     newState.winsAlly += 1;
            // }
            // return newState;   // commented code: drawn out way, we can consolidate it to the below code
            return {
                coinFace: newCoin,
                nFlips: state.nFlips + 1,   // smoother and easier to read. same logic.
                winsHorde: state.winsHorde + (newCoin.side === 'horde'? 1: 0),
                winsAlly: state.winsAlly + (newCoin.side === 'alliance'? 1: 0)
            }
        });

        // setTimeout(() => {
        //     this.setState({isFlipping: false});
        // }, 2000);
    }

    handleClick(e) {
        this.toss();
    };

    render() {
        return(
            <section className="Coinflip">
                <h1>Coin Toss Victories</h1>
                {this.state.coinFace && <Coin info={this.state.coinFace} />}
                <button onClick={this.handleClick}>COIN TOSS</button>
                <p>Out of {this.state.nFlips} battles, there are {this.state.winsHorde} Horde victories and {this.state.winsAlly} Alliance victories.</p>
            </section>
        );
    }
}

export default Coinflip;