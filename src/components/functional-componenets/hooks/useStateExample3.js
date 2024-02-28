import { useState } from "react"
import React from "react"

const UseStateExample3=()=>{
    const[fruits,setFruits]=useState(["apple","grapes","banana"])
    const handleAdd=()=>{
        let newState=[...fruits,"newfruit"]
        setFruits(newState)
    }
    const handledelete=(index)=>{
       let newState=[...fruits]
       newState.splice(index,1)
       setFruits(newState)
    }
    return(
        <>
        <h2>Todolist</h2>
        <button onClick={handleAdd}>ADD FRUIT</button>
        <ol>
        {
            fruits.map((eachElement,index)=>
                <React.Fragment key={index}>
                <li>{eachElement}</li>
                <button onClick={()=>handledelete(index)}>DELETE FRUIT</button>
                </React.Fragment>
            
            )
        }
        </ol>
        
        </>
    )
}
export default UseStateExample3