import { useEffect } from "react"


const UseEffectEx4=()=>{
    useEffect(()=>{
        window.addEventListener("mouseover",cb)
    },[])
    const cb=(event)=>{
        console.log(event.clientX)
        console.log(event.clientY)
    }
    return(
        <>
        <h1>Hi</h1>
        </>
    )
}
export default UseEffectEx4