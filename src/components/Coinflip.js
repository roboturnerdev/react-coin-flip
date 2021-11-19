import React, { Component } from 'react';
import Coin from './Coin';
import './Coinflip.css';

class Coinflip extends Component {

    static defaultProps = {
        factions: ['horde', 'alliance']
    };

    constructor(props) {
        super(props);
        this.state = {
            hWins: 0,
            aWins: 0,
            isflipping: false,
            coinFace: '/alliance.png'
        };
        this.toss = this.toss.bind(this);
    }

    toss () {
        let rollResult = Math.floor(Math.random() * this.props.factions.length);
        if(rollResult) {
            this.setState(curState => ({
                hWins: curState.hWins + 1,
                isFlipping: true
            }));
        } else {
            this.setState(curState => ({
                aWins: curState.aWins + 1,
                isFlipping: true
            }));
        }

        setTimeout(() => {
            this.setState({isFlipping: false});
        }, 2000);
    }

    render() {
        return(
            <section className="Coinflip">
                <h1>Coin Toss Victories</h1>
                <Coin face={this.state.coinFace} isFlipping={this.state.isFlipping} />
                <button onClick={this.toss} disabled={this.state.isflipping}>Toss a Coin</button>
                <p>Out of X battles, Y Horde victories and Z Alliance victories.</p>
            </section>
        );
    }
}

export default Coinflip;