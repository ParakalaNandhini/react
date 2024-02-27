import { Component } from "react";



class Circle extends Component{

    state={
        Circles:[]
    }

    addCircles=()=>{
        this.setState({
            Circles:[...this.state.Circles,false]
        })
    }
    changecolor=(index)=>{
        const updated=[...this.state.Circles]
        updated[index]=!updated[index]
        this.setState({
            Circles:updated
        })
    }
    blackcircles=()=>{
        var count=0
        for(var i=0;i<this.state.Circles.length;i++){
            if(this.state.Circles[i]===true){
                count++;
            }
        }
        return count;
    }
    render(){
        return(
            <>
            <button style={{border:"2px solid black"}} onClick={this.addCircles}>Click to add Circles</button>
            <h2>Total Circles--{this.state.Circles.length}</h2>
            <h2>Number of black circles--{this.blackcircles()}</h2>
            {
                this.state.Circles.map((element,index)=>(<Drawcircle key={index} isHighlight={element} changecolor={()=>this.changecolor(index)}/>))

            }
            
            </>
        )
    }
}
export default Circle;

class Drawcircle extends Component{
    render(){

        return(
            <div style={{width:100,height:100,borderRadius:"50%",border:"2px solid black",backgroundColor:this.props.isHighlight?"black":null}}
            onClick={this.props.changecolor} >
            
            </div>
        )
    }
}