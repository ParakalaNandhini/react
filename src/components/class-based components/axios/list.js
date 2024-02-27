import { Component } from "react";
import axios from "axios";
import Spinners from "../../functional-componenets/spinner/spinner";


class ListApi extends Component{
    constructor(){
        super()
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            this.setState({
                products:res.data
            })
        })
    }
    render(){
        return(
            <>
            <h1 style={{color:"red",textDecorationLine:"underline"}}>Product List</h1>
            {
               this.state.products.length>0 ?
               <ul>
                {this.state.products.map((eachObject)=>{
                    return( 
                    <li>{eachObject.title}</li>
                    )
                })}
                </ul>
               :
               <div className="spin"><Spinners/></div>
            }
            </>
        )
    }
}
export default ListApi;