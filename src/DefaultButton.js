import React,{useRef} from 'react';

//*After using memo for make memoization still render so that, will use callback
const DefaultButton=React.memo(({counterFn,label}) =>{
    let renderRef=useRef(0)
    console.log(renderRef.current++);
    return (
        <React.Fragment>
            <button className="btn-primary" onClick={counterFn}>{label}</button>
        </React.Fragment>
    );
})

export default DefaultButton;
