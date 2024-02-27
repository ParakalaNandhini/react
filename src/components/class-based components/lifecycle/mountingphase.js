import { Component } from "react";
import axios from "axios"
import Spinner from "../../functional-componenets/spinner/spinner";
import Spinners from "../../functional-componenets/spinner/spinner";


class Mounting extends Component{

    constructor(){
        super()
        this.state={
            products:[]
        }  
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            if(res.status===200){
                this.setState({
                    products:res.data
                })
            }
            else{
                alert("something went wrong")
            }
         
        })
        .catch(err=>console.log(err))
    }
    render(){
        return(
           <>
           <h1 style={{color:"red",textDecorationLine:"underline"}}>Product List</h1>
           {
            this.state.products.length>0 ?
            this.state.products.map(eachObject=><h2 key={eachObject.id}>--{eachObject.title}</h2>)
            :
            <div className="spin"><Spinners/></div>
           }
           </>
        )
    }
}
export default Mounting