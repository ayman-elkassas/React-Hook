import React, {useState,useEffect} from 'react';

function App() {

  //todo:should using useState or any react Hook in root block function
  //todo:does not use in any block as the following ex:
  // if(true){
  //   let [counter,setCounter]=useState(0,10)
  // }
  let [counter,setCounter]=useState(0,10)
  let [title,setTitle]=useState('')

  //*to use "this" use arrow function or bind context this in constructor 
  //*can customize code more and make arrow function in clicking
  let countUp=()=>{
    //* not recommended to set initial 
    // counter=counter||0
    //* if the same name will set, use this formula c=>c+1
    // setCounter(counter+1)
    setCounter(c=>c+1)
  }

  let handleTitle=()=>{
    setTitle("semi academy")
  }

  //* useEffect
  //* componentDidMount,componentDidUpdate,componentWillUnmount is combined inside useEffect
  //todo:useEffect can take second parameters array of dependencies
  //* if depend [] can not update any time
  //*then :
  // * 1-no depend (calling every update)
  // * 2-empty [] dep (never calling in update)
  // * 3-update every time change dep like counter
  useEffect(()=>{
    console.log("inside useEffect 1");
    document.title=title
    
    return()=>{
      setTimeout(() => {
        setTitle(" ")
        console.log("cleanup");
      }, 1000);
    }

  },[title])

  //*can declare different times
  useEffect(()=>{
    console.log("inside useEffect 2");
    document.title=`you have clicked ${counter} times`
  },[counter])

  return (
    <div className="container text-center">
      <button className="btn-primary" onClick={countUp}>Count Up</button>
      <button className="btn-success" onClick={handleTitle}>Change title</button>
      <p>{counter}</p>
      <p>{title}</p>
    </div>
  );
}

export default App;

//imagine for implementation for useState()

//returned array of item and function declaration to setState of item
// function useState(initialVal){
//   let item=initialVal
//   let setItem=(val)=>{
//     item=val
//   }
//   return [item,setItem]
// }