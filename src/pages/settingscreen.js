import { useContext } from "react"
import Header from "../components/functional-componenets/navBar/header"
import { UserDetails } from "../navigation/navigation"



const SettingScreen=()=>{
    let userinfo= useContext(UserDetails)
    return(
        <>
        <Header/>
        <h2>SettingScreen</h2>
        <h4>hi {userinfo.username}</h4>
        </>
    )
}
export default SettingScreen