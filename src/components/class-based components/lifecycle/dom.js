import { Component } from "react";


class DomManipulation extends Component{
    state={
        counter:0,
        favouritecolor:"red"
    }
    increment=(value)=>{
        this.setState({
            counter:this.state.counter+value
        })
    }
    componentDidMount(){
        document.title=this.state.counter
    }
    componentDidUpdate(){
        document.title=this.state.counter
    }
    static getDerivedStateFromProps(props,state){
        //to initialize state based on props
        return {favouritecolor:props.favcol}
    }
    render(){
        return(
            <>
            <h3>Dom Manipulate</h3>
            <h3>{this.state.favouritecolor}</h3>
            <h4>{this.state.counter}</h4>
            <button onClick={()=>this.increment(0)}>Increment</button>
            </>
        )
    }
}
export default DomManipulation