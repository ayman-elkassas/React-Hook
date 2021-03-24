import React, {useState} from 'react';

function App() {

  //todo:should using useState or any react Hook in root block function
  //todo:does not use in any block as the following ex:
  // if(true){
  //   let [counter,setCounter]=useState(0,10)
  // }
  let [counter,setCounter]=useState(0,10)

  //*to use "this" use arrow function or bind context this in constructor 
  //*can customize code more and make arrow function in clicking
  let countUp=()=>{
    //* not recommended to set initial 
    // counter=counter||0
    //* if the same name will set, use this formula c=>c+1
    // setCounter(counter+1)
    setCounter(c=>c+1)
  }

  return (
    <div className="container text-center">
      <button className="btn-primary" onClick={countUp}>Count Up</button>
      <p>{counter}</p>
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