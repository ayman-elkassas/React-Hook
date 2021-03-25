import React, {useState,useLayoutEffect,useRef, useCallback, useMemo} from 'react';
import { UseLayoutEffectEx } from './5-useLayoutEffect/useLayoutEffectEx';
import Button from './Button';
import DefaultButton from './DefaultButton';

function App() {

  
  let [counter,setCounter]=useState(0,10)
  const [divData,setDivData]=useState({})
  let [listOfCount,setListOfCount]=useState([1])

  const divRef=useRef()

  //Todo:useCallback
  //1-should component wrapped in React.memo
  //2-then use useCallback to handle action and depend on const not variable
  //*after using useCallback the problem still, because still depend on counter
  //* and counter is variable on click so, will depended on setCounter as fun
  const onClick=useCallback((n)=>{
    setCounter((c)=>c+n)
  },[setCounter])

  //Todo:useLayoutEffect
  //Recommend useEffect in first
  useLayoutEffect(()=>{
    setDivData(divRef.current.getBoundingClientRect())
    // console.log(divRef.current.getBoundingClientRect());
  },[listOfCount])

  let addButton=() => setListOfCount([...listOfCount,100])

   //Todo:useMemo

  let handleCount=() =>{
    setCounter((c)=>c+1)
  }

  //*can make useMemo without useCallback and React.memo
  const memoisedBtn=useMemo(()=>{
    return <DefaultButton counterFn={handleCount} label="Count Up useMemo"/>
  },[])

  

  return (
    <div className="container text-center pt-5">
      <button onClick={addButton}>Add more</button>
      <div ref={divRef}>
        {listOfCount.map((count)=>{

            return( <><Button counterFn={onClick}
                        n={count}
                        key={count} label={count}/>
                        <br/>
              </>)
          })}
        <br></br>
        <h1>{counter}</h1>
        {/* <pre style={{textAlign:'left'}}>{JSON.stringify(divData,null,2)}</pre> */}
        {/* <UseLayoutEffectEx/> */}
        {memoisedBtn}
      </div>
        
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