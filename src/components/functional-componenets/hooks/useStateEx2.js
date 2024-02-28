import { useState } from "react"


const UseStateExample2=()=>{
    const [timer,setTimer]=useState(0)
    const [intervalId,setIntervalId]=useState(null)

    const handleTimer=()=>{
        if(!intervalId){
        const newIntervalId=setInterval(()=>{
            setTimer(timer=>timer+1)
        },1000);
        setIntervalId(newIntervalId)
    }
    }
    const stopTimer=()=>{
        if(intervalId){
            clearInterval(intervalId)
            setIntervalId(null)
        }
        
    }
    return(
        <>
        <h2>Current time--{timer}</h2>
        <button onClick={handleTimer}>start</button>
        <button onClick={stopTimer}>Stop</button>
        </>
    )
}
export default UseStateExample2