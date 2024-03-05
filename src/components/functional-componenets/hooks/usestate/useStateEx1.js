import { useState } from "react"




const UseStateExample=()=>{
    const [currentCount,setCurrentCount]=useState(0)
    const handleIncrement=(value)=>{
        // setCurrentCount(currentCount+value)
        setCurrentCount(count=>count+1)
        setCurrentCount(c=>c+1)
    }
    const handleDecrement=(value)=>{
        setCurrentCount(currentCount-value)
    }
    const handleReset=()=>{
        setCurrentCount(0)
    }
    return(
        <>
        <h2>{currentCount}</h2>
        <button onClick={()=>{handleIncrement(10)}}>Increment</button>
        <button onClick={()=>{handleDecrement(10)}}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default UseStateExample