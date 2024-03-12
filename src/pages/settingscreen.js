import { useContext } from "react"
import Header from "../components/functional-componenets/navBar/header"
import { UserDetails } from "../navigation/navigation"
import Parentmemo from "../components/functional-componenets/memo/parent"
import Card from "../components/functional-componenets/card/card"
import useCounter from "../components/functional-componenets/hooks/customhook/usecounter"
import FetchEx from "../components/functional-componenets/hooks/customhook/some"


const SettingScreen=()=>{
    let userinfo= useContext(UserDetails)
    const[c,setc]=useCounter()
    return(
        <>
        <Header/>
        <h2>SettingScreen</h2>
        <h4>hi {userinfo.username}</h4>
        <Parentmemo/>
        <Card/>
        <h1>{c}</h1>
        <button onClick={()=>{setc(10)}}>Increment</button>
        </>
    )
}
export default SettingScreen