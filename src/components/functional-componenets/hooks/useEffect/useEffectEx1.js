import { useEffect, useState } from "react"



 const UseEffectExample =()=>{
    const[counter,setcounter]=useState(0)
    const[counter1,setcounter1]=useState(0)
    // useEffect(()=>{
    //     console.log("useeffect")
    // },[])
// if array is not given it will execute everytime when counter is increased    
    //  useEffect(()=>{
    //     console.log("useeffect")
    // },[counter])
// in the above example,it re-render with only counter as it is dependency array
     useEffect(()=>{
        console.log("useeffect")
    },[counter,counter1])
// in the above example,it re-render with both counter as it is dependency array

    const handleIncrement=()=>{
        setcounter(counter+1)
    }
    const handleIncrement1=()=>{
        setcounter(counter1+10)
    }
    return(
        <>
        <h1>counter {counter}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <h1>counter {counter1}</h1>
        <button onClick={handleIncrement1}>Increment with 10</button>
        </>
    )
 }
 export default UseEffectExample