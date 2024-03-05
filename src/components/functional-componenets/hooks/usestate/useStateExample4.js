import { useState } from "react";
import React from "react";

const UseStateExample4=()=>{
    const [employees,setEmployees]=useState([{
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
    }])
    const addemployees=()=>{
        let newState=[...employees,{ name:"newperson",
        designation:"newrole",
        salary:"nicesalary"}]
        setEmployees(newState)
    }
    const deleteemployee=(index)=>{
    let newState=[...employees]
        newState.splice(index,1)
        setEmployees(newState)
    }
    return(
        <>
        <h2>Employee info</h2>
        <button onClick={addemployees}>Addemployees</button>
        <table>
            {employees.map((eachObject,index)=>{
                return(
                    <React.Fragment key={index}>
                        <tr>
                            <td>{index+1}</td>
                            <td>{eachObject.name}</td>
                            <td>{eachObject.designation}</td>
                            <td>{eachObject.salary}</td>
                            <td><button onClick={()=>deleteemployee(index)}>Delete</button></td>
                        </tr>
                    </React.Fragment>
            
                )
            })
            
            
            }
        </table>
        </>
    )
}
export default UseStateExample4;