import { useContext } from "react"
import Header from "../components/functional-componenets/navBar/header"
import { UserDetails } from "../navigation/navigation"
import Parentmemo from "../components/functional-componenets/memo/parent"
import Card from "../components/functional-componenets/card/card"



const SettingScreen=()=>{
    let userinfo= useContext(UserDetails)
    return(
        <>
        <Header/>
        <h2>SettingScreen</h2>
        <h4>hi {userinfo.username}</h4>
        <Parentmemo/>
        <Card/>
        </>
    )
}
export default SettingScreen