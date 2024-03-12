import { useState } from "react"


const useCounter=()=>{
   const[count,setCount]=useState(0) 

   const handleCount=(value)=>{
    setCount(count+value)
   }

   return[count,handleCount]
}
export default useCounter