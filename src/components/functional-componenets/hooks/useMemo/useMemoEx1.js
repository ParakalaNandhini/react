import { useMemo, useState } from "react"




const UseMemoExample1=()=>{
    const[counter1,setCounter1]=useState(1)
    const[counter2,setCounter2]=useState(1)

    const handleincrementCounter1=()=>{
        setCounter1(counter1+1)
    }
    const handleincrementCounter2=()=>{
        setCounter2(counter2+1)
    }
    const evenChecker=useMemo(()=>{
            console.log("even")
            return counter1%2===0 ? "EVEN" : "ODD"
        },[counter1])
    return(
        <>
        <h3>{counter1} counter1</h3>
        <h3>{counter2} counter2</h3>
        <h3>{evenChecker}</h3>
        <button onClick={handleincrementCounter1}>Click to increment counter1</button>
        <button onClick={handleincrementCounter2}>Click to increment counter2</button>
        </>
    )
}
export default UseMemoExample1