import { useEffect, useState } from "react"


const UseEffectExample3=()=>{
    const [count,setcount]=useState(0)
    useEffect(()=>{
        domManipulation()
    },[count])
    const domManipulation=()=>{
        document.title=`Current count${count}`
    }
    return(
        <>
        <h2>Use Effect</h2>
        <h3>Current count {count}</h3>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        </>
    )
}
export default UseEffectExample3