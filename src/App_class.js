import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
  	super(props)

    this.state={
      count:0,
      title:""
    }

    this.countUp=this.countUp.bind(this)
    this.titleChange=this.titleChange.bind(this)
  }

  componentDidMount(){
    console.log("mounted");
  }

  componentDidUpdate(){
    //*call when change in props or state
    console.log("updated");
    document.title=this.state.title
    document.title=`you have clicked ${this.state.count} times`

  }

  //*to use "this" use arrow function or bind context this in constructor 
  countUp=()=>{
    this.setState({
      count:this.state.count+1
    })
  }

  titleChange=()=>{
    this.setState({
      title:"React Hooks"
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
        <button className="btn-primary" onClick={this.countUp}>Count Up</button>
        <button className="btn-success" onClick={this.titleChange}>Title Change</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default App;