import { useEffect, useState } from "react"
import axios from 'axios'
import Spinners from "../../spinner/spinner"

const Countwithdata=()=>{
    const[count,setcount]=useState(1)
    const [data,setdata]=useState([])
   useEffect(()=>{
    fetchData()
   },[count])
    const fetchData=async()=>{
       const result=await axios.get(`https://dummyjson.com/products/${count}`)
       setdata([result.data])
    }

    const increment=()=>{
        setcount(count+1)
    }

     
    return(
        <>
      <button onClick={increment}>Data of product no. {count}</button>
      <ul>
        {data.length > 0 ? (
          data.map((eachItem) => (
            <>
            <li>id :{eachItem.id}</li>
            <li>title :{eachItem.title}</li>
            <li>description:{eachItem.description}</li>
            <li>price:{eachItem.price}</li>
            </>
          ))
        ) : (
          <Spinners />
        )}
      </ul>
    </>
        
    )
}
export default Countwithdata
        