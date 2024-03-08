import axios  from "axios"
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Spinners from "../components/functional-componenets/spinner/spinner"

const ProductDetail=()=>{
    const routeinfo=useParams()
    const[product,setproduct]=useState({})
    useEffect(()=>{
        //fetch data related to product
        fetchdata()
    },[routeinfo.id])
    const fetchdata=()=>{
        axios.get(`https://fakestoreapi.com/products/${routeinfo.id}`)
        .then(res=>
            {
                if(res.status===200){
                    setproduct(res.data)
                }
            })
    }
    return(
        <>
        <h2>I'm Product detail screen</h2>
        {
            Object.keys(product).length>0
            ?
            <>
            <h2>{product.title}</h2>
            <img src={product.image} width={200} height={200}/>
            <h4 style={{color:"red"}}>₹{product.price}</h4>
            <h2>{product.description}</h2>
            </>
            :
            <div className="spin"><Spinners/></div>
        }
        </>
    )
}
export default ProductDetail