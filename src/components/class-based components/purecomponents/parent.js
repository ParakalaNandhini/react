import {Component} from "react";
import Child from "./child";

class ParentComponent extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <>
            <h3>Parent component</h3>
            <h4>State change{this.state.count}</h4>
            <button onClick={this.handleCount}>click</button>
            <Child/>
            </>
        )
    }
}
export default ParentComponent