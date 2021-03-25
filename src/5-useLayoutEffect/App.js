import React, {useState,useEffect,useRef, useCallback} from 'react';
import Button from './Button';
import { UseLayoutEffectEx } from './useLayoutEffectEx';

function App() {

  //todo:should using useState or any react Hook in root block function
  //todo:does not use in any block as the following ex:
  // if(true){
  //   let [counter,setCounter]=useState(0,10)
  // }
  let [counter,setCounter]=useState(0,10)
  let [title,setTitle]=useState('')

  const amountRef=useRef()
  const reachMaxRef=useRef(false)

  let listOfCount=[1,4,5,10,50]

  //*to use "this" use arrow function or bind context this in constructor 
  //*can customize code more and make arrow function in clicking
  let countUp=()=>{
    //* not recommended to set initial 
    // counter=counter||0
    //* if the same name will set, use this formula c=>c+1
    setCounter(counter+1)
    // if(!reachMaxRef.current){
    //   if(counter>=10){
    //     reachMaxRef.current=true
    //   }else{
    //     //todo:Tip -> check if null then plus 1, you can convert from string by adding + 
    //     setCounter(c=>c+(+amountRef.current.value || 1))
    //   }
    // }else{
    //   console.log("you reached max clicks");
    // }
  }

  let handleTitle=()=>{
    setTitle("semi academy")
  }

  //Todo:useEffect
  //* componentDidMount,componentDidUpdate,componentWillUnmount is combined inside useEffect
  //todo:useEffect can take second parameters array of dependencies
  //* if depend [] can not update any time
  //*then :
  // * 1-no depend (calling every update)
  // * 2-empty [] dep (never calling in update)
  // * 3-update every time change dep like counter
  useEffect(()=>{
    // console.log("inside useEffect 1");
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
    // console.log("inside useEffect 2");
    document.title=`you have clicked ${counter} times`
  },[counter])


  //Todo:useRef
  useEffect(()=>{
    amountRef.current.focus()
  })

  //Todo:useCallback
  //1-should component wrapped in React.memo
  //2-then use useCallback to handle action and depend on const not variable
  //*after using useCallback the problem still, because still depend on counter
  //* and counter is variable on click so, will depended on setCounter as fun
  const onClick=useCallback((n)=>{
    setCounter((c)=>c+n)
  },[setCounter])

  return (
    <div className="container text-center">
      <UseLayoutEffectEx/>
      <input ref={amountRef}/>
      <br></br>
        {listOfCount.map((count)=>{
          return <Button counterFn={onClick} n={count} key={count} label={count}/>
        })}
      <br></br>
    
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