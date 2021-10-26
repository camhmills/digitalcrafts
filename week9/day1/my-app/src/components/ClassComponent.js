import React, { Component } from 'react'

export default class ClassComponent extends Component {
    state = {
        counter: 0,
        studentName: "Cameron"
    };

    Increasecounter = () => {
        this.setState({counter : this.state.counter + 1})
    }

    DecreaseCounter = () => {
        if (this.state.counter > 0) {
            this.setState({counter : this.state.counter - 1})
        }
    }
    render() {
        return (
            <div>
                <p>Class Counter</p>
                <p>counter is : {this.state.counter}</p>
                <button onClick={this.Increasecounter}>Increase</button>
                <button onClick={this.DecreaseCounter}>Decrease</button>
                <button>Change the Student</button>
            </div>
        )
    }
}
