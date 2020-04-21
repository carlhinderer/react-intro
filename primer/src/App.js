import React, { Component } from "react";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 4
        }
    }

    isEven(val) {
        return val % 2 === 0 ? "Even" : "Odd";
    }

    handleClick = () => this.setState({ count: this.state.count + 1});

    render = () =>
        <h4 className="bg-primary text-white text-center p-2 m-1">
            <button className="btn btn-info m-2" onClick={ this.handleClick }>
                Click Me
            </button>
            Number of things: { this.isEven(this.state.count) }
        </h4>
}