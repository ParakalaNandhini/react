


import React, { useState } from 'react'
import Child from './child'

function Parentmemo() {
    const[counter,setCounter]=useState(0)
  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={()=>{setCounter(counter+1)}}>Count increment</button>
        <Child/>
    </div>
  )
}

export default Parentmemo