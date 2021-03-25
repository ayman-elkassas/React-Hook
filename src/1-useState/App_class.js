import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
  	super(props)

    this.state={
      count:0,
      title:""
    }

    this.countUp=this.countUp.bind(this)
  }

  //*to use "this" use arrow function or bind context this in constructor 
  countUp=()=>{
    this.setState({
      count:this.state.count+1
    })
  }

  //*using bind in constructor
  // countUp(){
  //   this.setState({
  //     count:++this.state.count
  //   })
  // }

  render() {
    return (
      <div className="container text-center">
        <button id="btnCounter" className="btn-primary" onClick={this.countUp}>Count Up</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default App;