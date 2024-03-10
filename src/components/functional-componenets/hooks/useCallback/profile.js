import { useCallback, useState } from "react"
import CustomButton from "./custom-button"



const ProfileExample=()=>{
    const[age,setage]=useState(100)
    const[salary,setsalary]=useState(10000)
    const handleAge=useCallback(()=>{
        setage(age+10)
    },[age])
    const handleSalary=useCallback(()=>{
        setsalary(salary+1000)
    },[salary])
    return(
        <>
        <h2>Salary{salary}</h2>
        <h1>Age{age}</h1>
        <CustomButton onClick={handleAge}>
            Age increment
        </CustomButton>
        <CustomButton onClick={handleSalary}>
            Salary increment
        </CustomButton>
        </>
    )
}
export default ProfileExample