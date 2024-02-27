import axios from "axios"
import { Component } from "react";

// const ProductsApi=()=>{
//     const fetchdata=async()=>{
//        const res= axios.get("https://fakestoreapi.com/products")

//     }


//     return (
//         <>
//         <button onClick={fetchdata}>Fetchdata</button>
//         </>
//     )
// }

class ProductsApi extends Component{
    constructor(){
        super()
        this.state={
            res:null
        }
    }
    //using async and await
    //  fetchdata=async()=>{
    //                const res= await axios.get("https://fakestoreapi.com/products")
    //                this.setState({
    //                 res:res.data
    //                })
            
    //  } 

    //using axios
    fetchdata=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
                this.setState({
                res:res.data
            })
        })

    }
    render(){
        return(
            <>
            <button onClick={this.fetchdata}>Fetchdata</button>
            {this.state.res && (
                <div>
                    <h2>Fetched data</h2>
                    <p>{JSON.stringify(this.state.res)}</p>
                </div>
            )}
            </>
        )
    }
}
export default ProductsApi



