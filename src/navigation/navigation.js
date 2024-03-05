import {BrowserRouter,Route,Routes} from "react-router-dom"
import HomeScreen from '../pages/homescreen'
import SettingScreen from '../pages/settingscreen'
import AboutScreen from '../pages/aboutscreen'
import ProfileScreen from '../pages/profile'
import InvalidScreen from "../pages/invalidscreen"
import PostRoute from "./postroutes/post-route"
import PreRoute from "./preroutes/pre-route"


const Navigation=()=>{
    return(
        <BrowserRouter>
            {
                true
                ?
                <PostRoute/>
                :
                <PreRoute/>
            }
        
        </BrowserRouter>
      
    )
}
export default Navigation