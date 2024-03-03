import { useEffect, useState } from "react";
import axios from 'axios'
import Spinners from "../../spinner/spinner";

const UseEffectEx2=()=>{
    const [count,setcount]=useState(0)
    const [data,setdata]=useState("")
    useEffect(()=>{
        fetchData()
    })
    const fetchData=async()=>{
       const result=await axios.get("https://dummyjson.com/products")
       setdata(result.data.products)
    }
    return(
        <>
        <h1>useEffect {count}</h1>
        <button onClick={()=>{setcount(count+1)}}>Count</button>
        {
            data.length>0
            ?
            data.map(item=><h4>{item.title}</h4>)
            :
            <Spinners/>
        }
        </>
    )
}
export default UseEffectEx2;