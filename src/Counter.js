import React from 'react'

function Counter({increment , decrement , count ,reset }) {
    const button ={
        color:"black",
        backgroundColor:"white",
        border:"none",
        padding:"0.75em",
        width:"120px",
        borderRadius:"5px",
        margin:" 0px 20px 0px 0px"
    }
  return (
    <div className="main">
        <h1>Counter Using React </h1>
        
        <h3>Your Current Count is: {count}</h3>
        <button onClick={increment} style={button} >Increment</button>
        <button onClick={decrement} style={button} >Decrement</button>
        {count>10 && <button style={button} onClick={reset}>Go Back To Zero</button>}
    </div>
  )
}

export default Counter