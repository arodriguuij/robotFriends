import React, { Component } from 'react';

class CounterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.count !== nextState.count ? true : false;
    }

    updateCount() {
        this.setState(previousState => ({ count: previousState.count + 1 }));
    }

    render() {
        return (
            <button
                id='counter'
                color={this.props.color}
                onClick={() => this.updateCount()} >
                Count: {this.state.count}
            </button>
        )
    }
}


export default CounterButton;