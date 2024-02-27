import axios from "axios"

const ProductsApi=()=>{
    const fetchData=async()=>{
        //hit the sever using axios
        // axios.get("https://fakestoreapi.com/products")
        // .then(res=>console.log(res))
        // .catch(err=>console.log(err))
    //   const res= await axios.get("https://fakestoreapi.com/products")
    //   console.log(res)
        //using fetch
        // fetch("https://fakestoreapi.com/products")
        // .then(res=>res.json())
        // .then(res=>console.log(res))
    let response1= await fetch("https://fakestoreapi.com/products")
    let finalresponse=response1.json()
        console.log(finalresponse)    
    }
    return(
        <>
        <button onClick={fetchData}>Fetch Data</button>
        </>
    )

}
export default ProductsApi