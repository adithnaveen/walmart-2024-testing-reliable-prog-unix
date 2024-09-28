import React, { Component } from 'react'



class AppComponentBtnHandler extends Component {

    // constructor() {
    //     super();
    //     this.btnHandler = this.btnHandler.bind(this);
    // }

    btnHandler = () => {
        console.log("Button Handler called...", this)
    }

    increment = () => {
        // if you call setState function then render is implicity called.
        this.setState({ num: this.state.num + 1 })
    }

    state = {
        num: 0
    }
    render() {
        console.log("render for state value of ", this.state.num)
        return (
            <div className="alert alert-primary">
                <h1>Button Handler </h1>

                <button onClick={this.btnHandler}
                    className="btn btn-primary">Button Handler</button>
                <hr />
                <button onClick={this.increment} className='btn btn-success'>Increment</button>
                <h2>The value of Num : {this.state.num} </h2>
            </div>
        );
    }
}

export default AppComponentBtnHandler;