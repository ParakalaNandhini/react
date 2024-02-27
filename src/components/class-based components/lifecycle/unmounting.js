import { Component } from "react";



class Unmounting extends Component{

    state={
        isChildVisible:false
    }

    childHandler=()=>{
        this.setState(
            {
                isChildVisible:!this.state.isChildVisible
            }
        )
    }
    render(){
        return(
            <>
            <h3>Unmounting</h3>
            <button onClick={this.childHandler}>Control the child</button>
            {
                this.state.isChildVisible
                ?
                <Child/>
                :
                <h3>No child found</h3>
            }
            </>
        )
    }
}
export default Unmounting


class Child extends Component{
    // componentWillUnmount(){
    //     alert("I'M REMOVED FROM DOM")
    // }
    render(){
        return(
            <>
            <h1>IM VISIBLE</h1>
            </>
        )
    }
}

