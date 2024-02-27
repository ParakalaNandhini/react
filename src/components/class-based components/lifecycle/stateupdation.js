import { Component } from "react";



class UpdatingPhase extends Component{
    state={
        count:0
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    componentDidUpdate(){
        console.log("component")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true// it stopsand if its true it continue
    }
    static getDerivedStateFromProps(props,state){
        //to initialize state based on props
        // return {favouritecolor:props.favcol}
        console.log("getDerivedStateFromProps")
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        
    }
    render(){
        return(
            <>
            <h2>hello</h2>
            <button onClick={this.increment}>Increment{this.state.count}</button>
            </>
        )
    }
}
export default UpdatingPhase