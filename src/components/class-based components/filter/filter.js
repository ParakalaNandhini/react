



import React,{ Component } from "react";

class Filter extends Component{

    constructor(){
        super()
        this.persons=[{
            name:"ramu",
            designation:"react",
            salary:50000
        },
        {
            name:"ravi",
            designation:"nodejs",
            salary:40000
        },
        {
            name:"ramya",
            designation:"frontend developer",
            salary:60000
        }
    ]
    this.state={
        data:[...this.persons]
    } 
}
       
        filter = (parameter) => {
            if (!parameter) {
              // If no parameter is provided, show all values
              this.setState({
                data: [...this.persons],
              });
            } else {
              let result = this.persons.filter((val) => {
                return val["designation"] == parameter;
              });
              this.setState({
                data: result,
              });
            }
          };

    render(){
        return(
            <div>
                <h1>Filter by</h1>
                <div style={{display:"flex",gap:"10px"}}>
                <button onClick={()=>this.filter("react")}>react</button>
                <button onClick={()=>this.filter("nodejs")}>nodejs</button>
                <button onClick={()=>this.filter("frontend developer")}>frontend</button>
                <button onClick={()=>this.filter()}>All</button>
                </div>
                {this.state.data.map((eachItem)=>{
                    return (
                        <div>
                            <h4>name={eachItem.name}</h4>
                            <h4>role={eachItem.designation}</h4>
                            <h4>salary={eachItem.salary}</h4>
                            <br></br>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}
export default Filter