import { useEffect, useState } from "react"


const UseEffectEx4=()=>{
    const[x,setX]=useState(null)
    const[y,setY]=useState(null)
    useEffect(()=>{
        window.addEventListener("mousemove",cb)
        return ()=>{
            window.removeEventListener("mousemove",cb)
        }
    },[])
    const cb=(event)=>{
        console.log(event.clientX)
        console.log(event.clientY)
        setX(event.clientX)
        setY(event.clientY)
    }
    return(
        <>
        <h1>Hi</h1>
        <h1>x-position-{x}</h1>
        <h1>y-position-{y}</h1>
        </>
    )
}
export default UseEffectEx4