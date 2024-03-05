
import { Route,Routes } from "react-router-dom"
import HomeScreen from "../../pages/homescreen"
import SettingScreen from "../../pages/settingscreen"
import AboutScreen from "../../pages/aboutscreen"
import ProfileScreen from "../../pages/profile"
import InvalidScreen from "../../pages/invalidscreen"


const PostRoute=()=>{
    return(
        <Routes>
                <Route path="/" Component={HomeScreen} />
                <Route path="/settings" Component={SettingScreen} />
                <Route path="/about" Component={AboutScreen} />
                <Route path="/Profile" Component={ProfileScreen} />
                <Route path="*" Component={InvalidScreen} />
            </Routes> 
    )
}
export default PostRoute