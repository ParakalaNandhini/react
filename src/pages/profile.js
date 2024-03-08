import { useContext } from "react"
import UseReducer from "../components/functional-componenets/hooks/useReducer/useReducerExample"
import Header from "../components/functional-componenets/navBar/header"
import { UserDetails } from "../navigation/navigation"



const ProfileScreen=()=>{
    let globalinfo=useContext(UserDetails)
    const increment=()=>{
        globalinfo.increment()
    }
    return(
        <>
        <Header/>
        <h2>profilescreen</h2>'
        <UseReducer/>
        <h3>{globalinfo.counter}</h3>
        <button onClick={increment}>Increment</button>
        </>
    )
}
export default ProfileScreen