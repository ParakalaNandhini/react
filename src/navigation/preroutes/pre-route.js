import { Route,Routes } from "react-router-dom"
import HomeScreen from "../../pages/homescreen"
import SettingScreen from "../../pages/settingscreen"
import AboutScreen from "../../pages/aboutscreen"
import ProfileScreen from "../../pages/profile"
import InvalidScreen from "../../pages/invalidscreen"
import LoginScreen from "../../pages/loginscreen"


const PreRoute=()=>{
    return(
        <Routes>
                <Route path="/" Component={LoginScreen} />
                <Route path="*" Component={InvalidScreen} />
            </Routes> 
    )
}
export default PreRoute